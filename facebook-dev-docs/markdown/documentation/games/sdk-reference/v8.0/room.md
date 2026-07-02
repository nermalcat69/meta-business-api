---
title: "Instant Games SDK v8.0: FBInstant.community"
source_url: https://developers.facebook.com/documentation/games/sdk-reference/v8.0/room
---

# Instant Games SDK v8.0: FBInstant.community

Updated: May 5, 2026

See [Instant Games SDK v8.0](https://developers.facebook.com/documentation/games/sdk-reference/v8.0) for the SDK overview, changelog, and root `FBInstant` reference.

## FBInstant.community

### canFollowOfficialPageAsync()

Check if user can follow official game page

**Returns:**`Promise<boolean>` — Returns bool for whether user can follow official game page

**Throws:**

* `INVALID_OPERATION`

**Example:**

```
FBInstant.community.canFollowOfficialPageAsync()  
  .then(function(data) {  
    console.log(data);  
  });
```

---

### canJoinOfficialGroupAsync()

Check if user can join official game group

**Returns:**`Promise<boolean>` — Returns bool for whether user can join official game group

**Throws:**

* `INVALID_OPERATION`

**Example:**

```
FBInstant.community.canJoinOfficialGroupAsync()  
  .then(function(data) {  
    console.log(data);  
  });
```

---

### followOfficialPageAsync()

Renders overlay with follow official page CTA

**Returns:**`Promise<void>`

**Throws:**

* `NETWORK_FAILURE`
* `INVALID_OPERATION`
* `PAGE_NOT_LINKED`

**Example:**

```
FBInstant.community.followOfficialPageAsync()
```

---

### joinOfficialGroupAsync()

Renders overlay with join group CTA

**Returns:**`Promise<void>`

**Throws:**

* `NETWORK_FAILURE`
* `INVALID_OPERATION`
* `GROUP_NOT_LINKED`

**Example:**

```
FBInstant.community.joinOfficialGroupAsync()
```

---
