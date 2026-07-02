---
title: "Introduction"
source_url: https://developers.facebook.com/docs/license
---

# Introduction

In countries with financial services advertising regulations, Meta may require advertisers to verify their identity and financial license. Regulators will provide Meta with a dataset of financial licenses, which Meta uses to validate licenses submitted by advertisers. This document covers how regulators securely share license data with Meta and the technical specifications for integration.

## Overview

The integration works as follows:

1. **Meta provides SFTP credentials** - Meta sends login details to the regulator's confirmed email address.
2. **Regulator uploads two files** - A `config.json` (metadata) and a **CSV file** (license data) are uploaded to Meta's secure SFTP server. [Instructions](https://developers.facebook.com/docs/license/upload) for uploading files.
3. **Meta ingests the data** - Files are processed periodically.
4. **Regulator regularly uploads** - Regulators are responsible for routinely uploading updated files weekly.

## What is config.json?

The `config.json` file is a manifest containing metadata required for processing. It must be included with every upload.

### Fields

| Field | Type | Required | Description | Allowed Values |
| --- | --- | --- | --- | --- |
| version | string | Yes | Schema version used for the license CSV file. | "v1" |
| load\_type | string | Yes | Whether this is a **full** dataset or an **incremental** update (deltas only). | "full", "incremental" |
| mode | string | Yes | * Validation: CSV file is checked for correctness and integrity, but not ingested. * Ingestion: CSV file is validated (using the same checks as validation mode), then ingested into the pipeline | "validation", "ingestion" |
| support\_email\_addresses | array of string | Yes | Monitored email addresses that Meta can use for outreach around data ingestion. |  |

### Example

```
1. {
2. "version": "v1",
3. "load_type": "full",
4. "mode": "ingestion",
5. "support_email_addresses": [
6. "support@domain.com",
7. "support2@domain.com"
8. ]
9. }
```

## License Data (CSV)

License data is provided as a CSV file. The file can have any name. There are two load types:

* **Full Load** - Contains the complete set of all license data.
* **Incremental Load** - Contains only the changes (deltas) since the last upload.

### General Rules

* Column headers must be on the **first row**.
* All column headers must be **unique**.
* All **required columns** must be present.
* Each row must have a unique `Credential_Id`.
* Row-level errors do **not** block the entire file. Valid rows are still ingested. For example, if 50 out of 100,000 rows have errors, the remaining 99,950 rows are processed normally.

## Full Load Schema (V1)

| Column | Required | Type | Description | Format / Allowed Values | Example |
| --- | --- | --- | --- | --- | --- |
| Credential\_Id | Yes | string | Unique identifier for the license. Displayed on published financial services ads. | Max 200 characters | 123456789 |
| License\_Status | Yes | string | Status of the license. | ACTIVE, INACTIVE, LEGALLY\_EXEMPT | ACTIVE |
| Licensee\_Name | Yes | string | Name under which the license is registered. | Max 200 characters | Jane Doe |
| Licensee\_Type | Yes | string | Type of entity holding the license. | INDIVIDUAL, FIRM, UNKNOWN\* | INDIVIDUAL |
| License\_Expiration\_Date | No | number | Expiration date of the license. | Unix timestamp | 946684800 |
| Address\_Line\_1 | No | string | Primary street address. | Max 200 characters | 123 Main St |
| Address\_Line\_2 | No | string | Secondary street address. | Max 200 characters | Suite 100 |
| City | No | string | City, locality, town, or municipality. | Max 200 characters | San Francisco |
| State | No | string | State, province, prefecture, county, or region. | Max 200 characters | CA |
| Country\_Code | No | string | Licensee's country. | ISO 3166-1 alpha-2 (max 2 chars) | US |
| Postal\_Code | No | string | Postal code. | Max 12 chars | 94016 |
| Phone\_Numbers | At least one must be provided: Phone\_Numbers, Email\_Addresses, or Website\_URLs. | string | Phone numbers registered on the license. | Semicolon-delimited; E.164 format; max 16 chars each (includes + prefix) | +15551234567;+15559876543 |
| Email\_Addresses | At least one must be provided: Phone\_Numbers, Email\_Addresses, or Website\_URLs. | string | Email addresses registered on the license. | Semicolon-delimited; max 254 chars each | jane.doe@gmail.com;info@firm.com |
| Website\_URLs | At least one must be provided: Phone\_Numbers, Email\_Addresses, or Website\_URLs. | string | Websites registered on the license. Must be prepended with “http://” or “https://”. | Semicolon-delimited; max 2000 chars each | https://www.example.com;https://www.example2.com |

To prevent impersonation, fraud, and abuse on Meta's advertising platforms, a connection check is essential. The uploaded financial license data must provide at least one of the following for each license: phone numbers, email addresses, or website URLs to perform this check. This ensures that the advertiser attempting to advertise is using a license connected to the entity in the verification.

## Incremental Schema (V1)

The incremental schema uses the **same columns** as the full load schema, plus one additional required column:

| Column | Required | Type | Description | Allowed Values |
| --- | --- | --- | --- | --- |
| Operation | Yes | string | The operation to perform on this row. | UPSERT, DELETE |

### Operation Rules

* **UPSERT** - Adds a new license or updates an existing one. Follows the same required/optional field rules as the full load schema.
* **DELETE** - Removes a license. Only `Credential_Id` is required; all other fields are optional.

### Example Incremental Load Scenario

An initial data set contains three licenses: A, B, C.

The following changes occur afterward:

* License B is updated.
* License C is deleted.
* License D is added.

The incremental CSV would contain:

| Credential\_Id | Operation | ... |
| --- | --- | --- |
| B | UPSERT | (other fields) |
| C | DELETE |  |
| D | UPSERT | (other fields) |

License A is **not included** because it had no changes.

The timestamp of your last ingested dataset is available via the `ingestion_history/` folder on SFTP (see below).

## SFTP Upload & Ingestion Process

### How to Upload

1. Log into the SFTP server using the credentials Meta provided.
2. Upload both `config.json` and your CSV data file to your **default directory**.
3. Wait for processing. Files can be validated several times a day using `validation` mode in `config.json` but data can only be ingested once daily.

### What Happens After Upload

* After processing, both files are **automatically moved** to either a `validation_history/` or `ingestion_history/` directory, depending on the mode set in `config.json`. If the uploaded CSV file contains any row-level errors, such as missing required values or invalid values, a separate CSV file detailing those errors will be generated. Before performing an ingestion, use `validation` mode to confirm your files will be processed correctly.
* Each run creates a timestamped folder (e.g., `2026-03-11T12-23-56Z/`) containing the exact files used in the history directory.
* If your files are still in the default directory (not in `ingestion_history/` or `validation_history/`), processing has not occurred yet.
* **Retention:** The SFTP server retains files for 30 days only.

### Example: Before & After Ingestion

Below illustrates the file structure before and after a new ingestion on 3/11/26 involving `data1.csv` and `config.json` with mode `ingestion`.

### Before Ingestion

```
1. config.json
2. data1.csv
3. ingestion_history/
4. └── 2026-03-06T04-20-17Z/
5. ├── config.json
6. ├── license_data.csv
7. ├── csv_errors.csv
8. validation_history/
9. └── 2026-03-11T05-18-14Z/
10. ├── config.json
11. ├── data1.csv
12. ├── csv_errors.csv
13. └── 2026-03-06T01-15-24Z/
14. ├── config.json
15. ├── license_data.csv
16. ├── csv_errors.csv
```

### After Ingestion

```
1. ingestion_history/
2. └── 2026-03-11T12-23-56Z/
3. ├── config.json
4. ├── data1.csv
5. └── 2026-03-06T04-20-17Z/
6. ├── config.json
7. ├── license_data.csv
8. ├── csv_errors.csv
9. validation_history/
10. └── 2026-03-11T05-18-14Z/
11. ├── config.json
12. ├── data1.csv
13. ├── csv_errors.csv
14. └── 2026-03-06T01-15-24Z/
15. ├── config.json
16. ├── license_data.csv
17. ├── csv_errors.csv
```

To trigger another ingestion, upload new files to your default directory again.

## Important Notes

* **Processing time:** Data may take up to 1 day to appear in Meta's system after ingestion.
