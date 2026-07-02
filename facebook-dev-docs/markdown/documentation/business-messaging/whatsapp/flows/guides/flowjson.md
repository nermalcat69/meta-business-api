---
title: "Components"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson
---

# Components

Updated: Jun 28, 2026

Components are the reusable UI elements that you combine to build a screen. They allow you to build complex UIs and display business data using attribute models. **The maximum number of components per screen is 50.** Please refer to [best practices for components](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/bestpractices#number-of-components).

The following components are supported:

* [Basic Text (Heading, Subheading, Caption, Body)](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#text)
* [RichText](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#richtext)
* [TextEntry](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#textentry)
* [CheckboxGroup](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#checkbox)
* [RadioButtonsGroup](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#radio)
* [Footer](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#foot)
* [OptIn](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#opt)
* [Dropdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#drop)
* [EmbeddedLink](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#embed)
* [DatePicker](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#dp)

* [CalendarPicker](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#calendarpicker)

* [Image](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#img)
* [If](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#if)
* [Switch](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#switch)
* [Media upload](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#media_upload)

* [NavigationList](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#navlist)

* [Chips Selector](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#chips_selector)

* [Image Carousel](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#image_carousel)

## Text Components

### Heading

This is the top level title of a page.

| Parameter | Description |
| --- | --- |
| `type` *string* | **Required.** “TextHeading” |
| `text` *string* | **Required.** Dynamic “${data.text}” |
| `visible` *boolean* | Dynamic “${data.is\_visible}” Default: True |

### Subheading

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “TextSubheading” |
| `text _string_` **(required)** | Dynamic “${data.text}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |

### Body

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | TextBody |
| `text _string_` **(required)** | Dynamic “${data.text}” |
| `font-weight _enum_` | {‘bold’,’italic’,’bold\_italic’,’normal’}   Dynamic “${data.font\_weight}” |
| `strikethrough _boolean_` | Dynamic “${data.strikethrough}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `markdown _boolean_` | Default: False  Requires Flow JSON V5.1+ |

### Caption

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “TextCaption” |
| `text _string_` **(required)** | Dynamic “${data.text}” |
| `font-weight _enum_` | {‘bold’,’italic’,’bold\_italic’,’normal’}   Dynamic “${data.font\_weight}” |
| `strikethrough _boolean_` | Dynamic “${data.strikethrough}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `markdown _boolean_` | Default: False  Requires Flow JSON V5.1+ |

### Limits and restrictions

| Component | Type | Limit / Restriction |
| --- | --- | --- |
| Heading Subheading Body Caption | Character Limit | 80  80  4096  409 |
| Heading  Subheading  Body  Caption | Text | Empty or Blank value is not accepted |

### Additional capabilities for Text components

Supported starting with Flow JSON version 5.1

In Flow JSON V5.1 `TextBody` and `TextCaption` also support a limited markdown syntax. To enable this capability, set the property `markdown=true`. The `markdown=true` property instructs WhatsApp Flows to enable markdown syntax within these components.

```
```
{  
   "type": "TextBody",  
   "markdown": true,  
   "text": [  
     "This text is ~~***really important***~~"  
   ]  
}
```
```

```
```
{  
   "type": "TextCaption",  
   "markdown": true,  
   "text": [  
     "This text is ~~***really important***~~"  
   ]  
}
```
```

For comparison purposes, the following preview shows how the text components look next to one another:

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "TextHeading",

"text": "This is a heading",

"visible": true

},

{

"type": "TextSubheading",

"text": "This is a subheading",

"visible": true

},

{

"type": "TextBody",

"text": "This is body text"

},

{

"type": "TextCaption",

"text": "This is a text caption"

},

{

"type": "Footer",

"label": "Continue",

"on-click-action": {

"name": "complete",

"payload": {}

}

}

]

}

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# This is a heading

## This is a subheading

This is body text

This is a text caption

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Rich Text

Supported starting with Flow JSON version 5.1

Flow JSON 5.1 introduces a new component - `RichText`. The goal of the component is to provide rich formatting capabilities and introduce the way to render large texts (such as **Terms of Condition**, **Policy Documents**, and **User Agreement**) without facing limitations of basic text components (such as **TextHeading**, **TextSubheading**, and **TextBody**)

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “RichText” |
| `_string | string array_` **(required)** *string | string array* | Dynamic “${data.text}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |

`RichText` component utilizes a select subset of the `Markdown` specification. It adheres strictly to standard `Markdown` syntax without introducing any custom modifications. Content created for the `RichText` component is fully compatible with standard `Markdown` documents.

**Note:**

Until V6.2, the RichText component can only be used as a standalone component on the screen and cannot be combined with other components on the same screen.

Starting with V6.3, the RichText component can be used in conjunction with the Footer component on same screen, allowing the Flow to navigate from or end at the screen with RichText.

If your use case requires text alongside other components, use the basic Text component, which supports markdown features such as bold, italic, strikethrough, links, and lists.

### Supported syntax

#### Headings

The current syntax supports only `Heading (h1)` and `Subheading (h2)`. The parser parses other heading levels but renders them as normal text - `TextBody`.

| Flow JSON | Flow Component |
| --- | --- |
| ```  ``` {    "type": "RichText",    "text": [      "# Heading level 1"    ] } ``` ``` | `TextHeading` |
| ```  ``` {    "type": "RichText",    "text": [      "## Heading level 2"    ] } ``` ``` | `TextSubheading` |
| ```  ``` {        "type": "RichText",        "text": [          "### Heading level 3",         "#### Heading level 4",          "##### Heading level 5",         "###### Heading level 6"        ]     } ``` ``` | `TextBody` |

#### Paragraphs

To create paragraphs, split your text into different array items:

```
```
{  
       "type": "RichText",  
       "text": [  
         "Paragraph 1",  
        "Paragraph 2"  
       ]  
    }
```
```

or add a blank line in your markdown document that you bind using dynamic binding syntax `${data.your_dynamic_field}`

```
```
# Heading 1  
Paragraph 1  
  
Paragraph 2
```
```

```
```
{  
       "type": "RichText",  
       "text": "${data.text}"  
    }
```
```

#### Text formatting

| Flow JSON | Flow Component |
| --- | --- |
| ```  ``` {    "type": "RichText",    "text": [      "Let's make a **bold** statement"    ] } ``` ``` | `TextBody (bold)` |
| ```  ``` {    "type": "RichText",    "text": [      "Let's make this text *italic*"    ] } ``` ``` | `TextBody (italic)` |
| ```  ``` {    "type": "RichText",    "text": [      "Let's make this text ~~Strikethrough~~"    ] } ``` ``` | `TextBody (strikethrough)` |
| ```  ``` {    "type": "RichText",    "text": [      "This text is ~~***really important***~~"    ] } ``` ``` | `TextBody (bold-italic-strikethrough)` |

#### Lists

You can organize items into ordered and unordered lists. At the moment, only single level lists are supported.

| Flow JSON | Flow Component |
| --- | --- |
| ```  ``` {    "type": "RichText",    "text": [      "1. Item 1",      "2. Item 2",      "3. Item 3"    ] } ``` ``` | `OrderedList` (not available as standalone component) |
| ```  ``` {    "type": "RichText",    "text": [      "- Item 1",      "- Item 2",      "- Item 3"    ] } ``` ```  ```  ``` {    "type": "RichText",    "text": [      "+ Item 1",      "+ Item 2",      "+ Item 3"    ] } ``` ``` | `UnorderedList` (not available as standalone component) |

#### Images

You can also include images in the content. Please note, external URIs are not supported and you can only include base64 inline images

```
```
{  
   "type": "RichText",  
   "text": ["![Image alt text](data:image/png;base64,<base64 content>)"]  
}
```
```

**Recommended image formats:**

* png
* jpg / jpeg
* WebP (please note, WebP is only supported starting from iOS 14.6+, that corresponds to ~98% of iOS devices)

#### Links

To create a link, enclose the link text in brackets and then follow it immediately with the URL in parentheses

```
```
{  
   "type": "RichText",  
   "text": [  
     "[WhatsApp Flows let you build rich, interactive screens](https://business.whatsapp.com/products/whatsapp-flows)"  
   ]  
}
```
```

#### Tables

|  |  |
| --- | --- |
| To add a table, use three or more hyphens (---) to create each column’s header, and use pipes ( | ) to separate each column. For compatibility, you should also add a pipe on either end of the row. |

Cell content can be combined with the following syntax:

* Italic, bold, strikethrough
* Images
* Links

```
```
{  
   "type": "RichText",  
   "text": [  
     "\| Column Header 1     \| Column Header 2                                             \|",  
     "\| -------------       \|  -------------                                              \|",  
     "\| **Bold** text 1     \| [Link](<URI>)                                               |",  
     "| **Bold** text 1     | ![Image alt text](data:image/png;base64,<base64 content>)   |"  
   ]  
}
```
```

**Width of the columns:**

Width of the column is based on the Header content size. Markdown specification doesn’t provide a specific syntax for controlling a column width. If you want to make a certain column wider, simply add additional content to the header:

```
```
{  
   "type": "RichText",  
   "text": [  
     "| Column Header 1 - Extended width  | Column Header 2       |",  
     "| -------------                     |  -------------        |",  
     "| **Bold** text 1                   | Cell text 2           |"  
   ]  
}
```
```

#### Working with large texts

If your text content for markdown has a limited size, you can incorporate it as a static text as shown in all examples above. However, if your text is large and you expect to update it often on your server, send it as a part of dynamic data. This improves overall readability of the JSON and allows you to always load up-to-date text from your server.

**Please note:** These examples use the array text property for static cases since it’s easier to read. However the components support both types: `Array of strings` and `string`. Your markdown can be sent as a normal string, you don’t need to convert it to an array of strings.

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"TOC": [],

"FIRST\_SCREEN": [

"TOC"

]

},

"screens": [

{

"id": "TOC",

"data": {

"text": {

"type": "string",

"\_\_example\_\_": "Your content"

}

},

"title": "Terms of Service",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "RichText",

"text": "${data.text}"

}

]

}

},

{

"id": "FIRST\_SCREEN",

"title": "Welcome",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "OptIn",

"name": "toc",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

TOC

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Terms of Service

Terms of Service

Your content

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

#### Syntax cheatsheet

* Supported starting with Flow JSON version 5.1

Here is the quick overview of the syntax that’s supported by RichText, TextBody, and TextCaption components

| Syntax | RichText | TextBody | TextCaption |
| --- | --- | --- | --- |
| `# Text Heading` | ✅ | ❌ | ❌ |
| `## Text Subheading` | ✅ | ❌ | ❌ |
| `**bold**` | ✅ | ✅ | ✅ |
| `*italic*` | ✅ | ✅ | ✅ |
| `~~strikethrough~~` | ✅ | ✅ | ✅ |
| `Normal Paragraph` | ✅ | ✅ | ✅ |
| ``` + Item 1 + Item 2 ``` | ✅ | ✅ | ✅ |
| ``` 1. Item 1 2. Item 2 ``` | ✅ | ✅ | ✅ |
| `[Link text](https://your-url.here)` | ✅ | ✅ | ✅ |
| `![Image Alt](data:image/png;base64, base64-data)` | ✅ | ❌ | ❌ |
| ``` | Header 1 | Header 2 | Header 3 | | -------- | -------- | -------- | | Row 1    | Data 1   | More Data | | Row 2    | Data 2   | More Data | | Row 3    | Data 3   | More Data | ``` | ✅ | ❌ | ❌ |

#### Usage example

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "FIRST\_SCREEN",

"title": "Welcome",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "TextCaption",

"markdown": true,

"text": [

"This is a markdown example inside \*\*TextCaption\*\*. You can combine \*\*different\*\* \*formatting\* ~~\*\*\*styles\*\*\*~~",

"You can also add [links](https://whatsapp.com) to external web-sites"

]

},

{

"type": "TextBody",

"markdown": true,

"text": [

"This is a markdown example inside \*\*TextCaption\*\*. You can combine \*\*different\*\* \*formatting\* ~~\*\*\*styles\*\*\*~~.",

"You can also add [links](https://whatsapp.com) to external web-sites",

"And use \*\*Ordered\*\* and \*\*Unordered\*\* lists:",

"1. List item",

"2. List item"

]

},

{

"type": "OptIn",

"name": "toc",

"required": true,

"label": "RichText can be used to render large static or dynamic texts.",

"on-click-action": {

"name": "navigate",

"next": {

"type": "screen",

"name": "TOC"

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

FIRST\_SCREEN

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Welcome

Welcome

This is a markdown example inside TextCaption. You can combine different *formatting* ~~*styles*~~

You can also add [links](https://whatsapp.com/) to external web-sites

This is a markdown example inside TextCaption. You can combine different *formatting* ~~*styles*~~.

You can also add [links](https://whatsapp.com/) to external web-sites

And use Ordered and Unordered lists:

* List item
* List item

# 

RichText can be used to render large static or dynamic texts. Read more [Read more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

# 

Proceed

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Text Entry Components

### TextInput

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “TextInput” |
| `label _string_` **(required)** | Dynamic “${data.label}” |
| `input-type _enum_` | {‘text’,’number’,’email’, ‘password’, ‘passcode’, ‘phone’} |
| `pattern _string_` | When specified, it is a regular expression which the input’s value must match for the value to pass.  * Supported starting with Flow JSON version 6.2 * Supported with input-type= {'text', 'number', 'password', 'passcode'} * Expects a raw regex string (e.g., hello, not /hello/). * When using the pattern field, helper-text is mandatory. * For input-type= {'number', 'passcode' }, a base regular expression is applied before the pattern validator, ensuring both validations are performed. |
| `required _boolean_` | Dynamic “${data.is\_required}” |
| `min-chars _string_` | Dynamic “${data.min\_chars}” |
| `max-chars _string_` | Dynamic “${data.max\_chars}”.   Default value is 80 characters. |
| `helper-text _string_` | Dynamic “${data.helper\_text}” |
| `name _string_` **(required)** |  |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `init-value _string_` | Dynamic “${data.init-value}”   Only available when component is outside Form component  Optional Form * Supported starting with Flow JSON version 4.0 |
| `error-message _string_` | Dynamic “${data.error-message}”   Only available when component is outside Form component  Optional Form * Supported starting with Flow JSON version 4.0 |

### TextArea

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “TextArea” |
| `label _string_` **(required)** | Dynamic “${data.label}” |
| `required _boolean_` | Dynamic “${data.is\_required}” |
| `max-length _string_` | Dynamic “${data.max\_length}”   Default value is 600 characters. |
| `name _string_` **(required)** |  |
| `helper-text _string_` | Dynamic “${data.helper\_text}” |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `init-value _string_` | Dynamic “${data.init-value}”   Only available when component is outside Form component  Optional Form * Supported starting with Flow JSON version 4.0 |
| `error-message _string_` | Dynamic “${data.error-message}”   Only available when component is outside Form component  Optional Form * Supported starting with Flow JSON version 4.0 |

### Limits and restrictions

| Component | Type | Limit / Restriction |
| --- | --- | --- |
| TextInput | Helper Text  Error Text  Label | 80 characters  30 characters  20 characters |
| TextArea | Helper Text  Label | 80 characters  20 characters |

Together, the text entry components look like as shown:

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "text\_input\_form",

"init-values": {

"text input": "This is text input",

"text area": "This is text area"

},

"children": [

{

"type": "TextInput",

"required": true,

"label": "Text Input",

"name": "text input"

},

{

"type": "TextInput",

"required": true,

"label": "Number Input",

"input-type": "number",

"name": "number input"

},

{

"type": "TextInput",

"required": true,

"label": "Email Input",

"input-type": "email",

"name": "email input"

},

{

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# Demo Screen

Demo Screen

# Text Input

Text Input

# Number Input

Number Input

# Email Input

Email Input

# Password Input

Password Input

# Passcode Input

Passcode Input

# Phone Input

Phone Input

# Regex Input

Regex Input

# E.g. 1993-08-04

E.g. 1993-08-04

# Regex Passcode

Regex Passcode

# Contains: 007

Contains: 007

This is text area

# Text Area

Text Area

# 

# 

17 / 600

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## CheckboxGroup

CheckboxGroup component allows users to pick multiple selections from a list of options.

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “CheckboxGroup” |
| `data-source _array_` **(required)** | Dynamic “${data.data\_source}”  **Flow JSON versions before 5.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean>*  **Flow JSON versions after 5.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean, image: Base64 of an image, alt-text: string, color: 6-digit hex color string >*  **Flow JSON versions after 6.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean, image: Base64 of an image, alt-text: string, color: 6-digit hex color string, on-select-action: {name: 'update\_data', payload: {...}}, on-unselect-action: {name: 'update\_data', payload: {...}} >* |
| `name _string_` **(required)** |  |
| `min-selected-items _int_` | Dynamic “${data.min\_selected\_items}” |
| `max-selected-items _int_` | Dynamic “${data.max\_selected\_items}” |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}” |
| `label _string_` | Dynamic “${data.label}”  * Flow JSON versions before 4.0: **optional** * Flow JSON versions after 4.0: **required** |
| `required _boolean_` | Dynamic “${data.is\_required}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `on-select-action _action_` | `data_exchange` and `update_data` are supported.  **update\_data** * Supported starting with Flow JSON version 6.0 |
| `description _string_` | Dynamic “${data.description}”  * Supported starting with Flow JSON version 4.0 |
| `init-value _array<string>` | Dynamic “${data.init-value}”   Only available when component is outside Form component  * Supported starting with Flow JSON version 4.0 |
| `error-message _string_` | Dynamic “${data.error-message}”   Only available when component is outside Form component  * Supported starting with Flow JSON version 4.0 |
| `media-size _enum_` | {‘regular’, ‘large’}  Dynamic “${data.media-size}”  * Supported starting with Flow JSON version 5.0 |

Images in WebP format are not supported on iOS versions prior to iOS 14.

### Example

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {},

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"data": {

"all\_extras": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "1",

"title": "Fries"

},

{

"id": "2",

"title": "Coleslaw"

}

]

}

},

"layout": {

"type": "SingleColumnLayout",

"children": [

{

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

# Demo screen

Demo screen

# 

Extras:

# 

Pick something to go with your meal

* # 

  Fries
* # 

  Coleslaw

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "TRAVEL\_PACKAGES",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "CheckboxGroup",

"name": "packages",

"required": true,

"data-source": [

{

"id": "1",

"title": "Tropical Beach Vacation",

"description": "Enjoy 7 nights and 8 days at a luxury beach resort in Bali. Including flights and stays",

"alt-text": "beach vacation",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "2",

"title": "Mountain Adventure",

"description": "Embark on a 5-day guided trek in the Swiss Alps. Package includes flights and stays",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "3",

"title": "City Break",

"description": "Explore the sights and sounds of New York City with our 4 nights and 5 days package",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "4",

"title": "Historical Tour",

"description": "Take a 7-day historical tour of Rome, Italy. Package includes flights and stays",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

}

],

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Travel Packages

Travel Packages

# 

Explore our exciting packages

* ![Image. beach vacation.](data:image/png;base64,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)

  # 

  Tropical Beach Vacation

  # 

  Enjoy 7 nights and 8 days at a luxury beach resort in Bali. Including flights and stays
* ![Image. Mountain Adventure.](data:image/png;base64,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)

  # 

  Mountain Adventure

  # 

  Embark on a 5-day guided trek in the Swiss Alps. Package includes flights and stays
* ![Image. City Break.](data:image/png;base64,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)

  # 

  City Break

  # 

  Explore the sights and sounds of New York City with our 4 nights and 5 days package
* ![Image. Historical Tour.](data:image/png;base64,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)

  # 

  Historical Tour

  # 

  Take a 7-day historical tour of Rome, Italy. Package includes flights and stays

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

For the `data-source` field, you can declare it dynamically or statically.

### Static example

This static example hardcodes the respective `id`’s and `title`’s for the `data-source` field.

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "checkbox\_example\_form",

"children": [

{

"type": "CheckboxGroup",

"name": "checkboxgroup",

"label": "Checkbox group example",

"data-source": [

{

"id": "Checkbox 1",

"title": "Checkbox 1"

},

{

"id": "Checkbox 2",

"title": "Checkbox 2"

},

{

"id": "Checkbox 3",

"title": "Checkbox 3"

}

]

},

{

"type": "Footer",

"label": "Continue",

"on-click-action": {

"name": "complete",

"payload": {}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# 

Checkbox group example

# 

(optional)

* # 

  Checkbox 1
* # 

  Checkbox 2
* # 

  Checkbox 3

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Dynamic example

In this dynamic example, you can see that `data-source` references the `days_per_week_options` of type `array` defined before it using `days_per_week_options`. When defining such a structure, you need to specify `items` in the `array`, which will be of type `object`. Then inside the `items` object, you have a `properties` dictionary with `id` and `title` just like in the static declaration. Both `id` and `title` will always be of type `String`. Within the `days_per_week_options` array, you must define concrete examples in the `__example__` field.

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"data": {

"days\_per\_week\_heading": {

"type": "string",

"\_\_example\_\_": "How often would you like to workout?"

},

"days\_per\_week\_options": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "2",

"title": "2 days a week"

},

{

"id": "3",

"title": "3 days a week"

},

{

"id": "4",

"title": "4 days a week"

},

{

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# Demo Screen

Demo Screen

# 

How often would you like to workout?

* # 

  2 days a week
* # 

  3 days a week
* # 

  4 days a week
* # 

  5 days a week
* # 

  6 days a week

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Label Content  Title  Description  Metadata  Min # of options  Max # of options  Image | 30 Characters  30 Characters  300 Characters  20 Characters  1  20  **Flow JSON versions before 6.0:**  300KB **Flow JSON versions after 6.0:**  100KB |

## RadioButtonsGroup

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “RadioButtonsGroup” |
| `data-source _array_` **(required)** | Dynamic “${data.data\_source}”  **Flow JSON versions before 5.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean>*  **Flow JSON versions after 5.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean, image: Base64 of an image, alt-text: string, color: 6-digit hex color string >*  **Flow JSON versions after 6.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean, image: Base64 of an image, alt-text: string, color: 6-digit hex color string, on-select-action: {name: 'update\_data', payload: {...}}, on-unselect-action: {name: 'update\_data', payload: {...}} >* |
| `name _string_` **(required)** |  |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}” |
| `label _string_` | Dynamic “${data.label}”  * Flow JSON versions before 4.0: **optional** * Flow JSON versions after 4.0: **required** |
| `required _boolean_` | Dynamic “${data.is\_required}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `on-select-action _action_` | `data_exchange` and `update_data` are supported.  **update\_data** * Supported starting with Flow JSON version 6.0 |
| `description _string_` | Dynamic “${data.description}”  * Supported starting with Flow JSON version 4.0 |
| `init-value _array<string>` | Dynamic “${data.init-value}”   Only available when component is outside Form component  * Supported starting with Flow JSON version 4.0 |
| `error-message _string_` | Dynamic “${data.error-message}”   Only available when component is outside Form component  * Supported starting with Flow JSON version 4.0 |
| `media-size _enum_` | {‘regular’, ‘large’}  Dynamic “${data.media-size}”  * Supported starting with Flow JSON version 5.0 |

Images in WebP format are not supported on iOS versions prior to iOS 14.

### Example

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {},

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"data": {

"all\_appointment\_types": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "1",

"title": "Online"

},

{

"id": "2",

"title": "In Person"

}

]

}

},

"layout": {

"type": "SingleColumnLayout",

"children": [

{

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

# Demo screen

Demo screen

# 

Appointment type

# 

Choose your preferred appointment type

* # 

  Online
* # 

  In Person

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "TRAVEL\_PACKAGES",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "RadioButtonsGroup",

"name": "packages",

"required": true,

"data-source": [

{

"id": "1",

"title": "Tropical Beach Vacation",

"description": "Enjoy 7 nights and 8 days at a luxury beach resort in Bali. Including flights and stays",

"alt-text": "beach vacation",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "2",

"title": "Mountain Adventure",

"description": "Embark on a 5-day guided trek in the Swiss Alps. Package includes flights and stays",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "3",

"title": "City Break",

"description": "Explore the sights and sounds of New York City with our 4 nights and 5 days package",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "4",

"title": "Historical Tour",

"description": "Take a 7-day historical tour of Rome, Italy. Package includes flights and stays",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

}

],

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Travel Packages

Travel Packages

# 

Explore our exciting packages

* ![Image. beach vacation.](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAIAAABJgmMcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpOjVtVAABAAElEQVR4ATS9V7Bl6XXfd3ZOJ8ebQ+cwsQcYDAaBBEARBCGIlmjRKouWWLKqJNmyVJLKQaqy/eQnP9gvrrLLVZZLtFmyqVJZFqsAUiQiAUzGzHSYTrdvjifHnc/2b50L3+6+99x99tn7+9a3wn/91/p2K//wf/hepmSqomVZls7TeZbN53xT5jkO84+fapbja57l5mqO35VcLs0UVV5nmZqT8zRFNVQtSGKFo5miKLk4mc9zucW7OS6jZqFr7PrJaJ7dzHJlLpepKtfl+rqq6Erop4bKhZTM1tJZ0DZNY9DfU7MD06xvVNrnZz01KZ21+6NpezA9zher1bp6eNhdaa5urm0+O/okzUWWlm+U+PXVjz7+QZT6tu5Ow0m9dfPm1m+Wy9ff/+Hvl9au9If7uXS+uXVtqbhiKp7mVGu1ZebDjPnuB+NyqWqbfOm2bvqBn6RpGv2s5NUt0wrDtDPd+ejT+5tL33EtZRapy6vbSk5Js4y5x/NsFvnMWM8pqoIsZYo5hJGTl1wcyeTmSExeI9PFz1yGNOWNTNFySCPlQ4nIk/NSxJ23bUPTgjhK5qmuafNsbmg5x4gMQx/MlJx2N5zeH49+3zS2Dfdtwyxz9ZyqpUg7cxTupmYlZ46Yk9QYjB5pujIb7bn6bpZtHh+3N5bKe0d7QRKkaZBTL65eeWWcZ2jqcNyNfGUwmTgW84pGT35aKa7XWvf6vU/i/mFvOHQc19D1zRv3Ut3QDMV161E0sAzXsOqG7SG+WRAxK5V1Nb0sp06DcOpHiuo7ItYnXFkpNDu9TqO+rk77S7WVSrE6i6J8paipmq5qYRwvJDb3bNeP57qyECHayVE0VRUh5nKaSAhZsQK8P1fnKkq8EChCzeX0lPlzlpye8p118CzbtSw+oOlanCRRHKdzOSGa5xqe0ut9dDY6dbxXLfdbvdN/ncYfFOvfarZeGs0uysWbag7j4ORM1bQw8pPoWFPmw96ncaTmtdhoWLZVfPfDjxH6cDAyrNRNtekkSP1cpdaolUpBEJS8EjfS1cycu5rhnp2/6+WrWS4uFoyL0acsXq2xHqSqZZqeV5vNSnOrWay0LF1H1qqaoAelgqtpShBEOcViOLLWShRED+PYs20rzQqHZxf94UG99tvhfN5qLhcK+TBgoimfjdIEpYuiue8H2tf+8t9GaggC+0V6/FnYolwRAfMNYfEHxcQdLE5EkqLNHDV1zWJIiqaJtOVdjMXUtKJr5x3T0LhYqKkXw/EzTIfz/dmOPz5Q9FU3f6Pbfrff+8grLE9GB1lO1808y4dGG7luGIdRMDO13GR46BnFlfrW0XFvNgsqVbvdHc5837TwFNOLbv/w9NB1zLs3blXL9Yv+UZZLxn67mC/euv6N9vlJ3ltttb5QLt3VDaNSXM27Xq1UK7iVcrHuOnk/iqN4zsjjZOZYZrVcjLhtEiVJwlANVTWT3cG42x+OPbswGncNo+TPRqXKV0vFYsL6J0xYHEWUznVN5wiajkJob/3G71qmISLD5ERkGtJFignqKj5QHKGI61JgXABZaqgnypzjVLwMNp93XdSXRcZ9iIFpOWQ8i+ZxmrlWvlXZRP/6vbNghok30yQc9vv12mocRO3TD3JZ0u++aFWtkmvFSX88S11LVcKTbI41jYum41ju/v7Rq/e+GvuTdqeNS9ENZTJOHNOrlVudYX80Gh2eHUfRLAqUqnsnX3DbF/vD4LRZLzZaX7L1hq7hdfRM1dMU0wkKTpHZokC2riZJJ0o6ebeMcDiis7K65hoG8zL1Xm94Yuj5cqGSpJmll9JQX1q6ZRqmH0ZI0DA0jqcECyU3mAZ8FgeivfnN30UWqqbYthkhgEvRqSJV0VeRMV+ip3KAJZGwpCBjhH3pUC3DzFuMGAmrRdw1h5XMMnTXCNXcSS4dtttP9g5/EQXTKEzRBTWeGVbJ0HOOmhqWXfZwncE8etyqRUe7f+zoXd+fdgejnGLs7XxQyueLxcKHDz+8cfOV2Xh0cnY+nk5MI0NJcf5Fr1RgMd1SmmImhNLAK6j12psvvfSGP10K5l1N7dbLt+Oof37y02D2yFInzeotG1+P0qpKEJ4/3vvjJPFb1atpqpqWTjhJkwQXGcdD22n3++NG83bJs0bjuW1ahfKtNNPCMELvUhEIzi4zTD0RRVSR7HA80t7+zb+JcFADPHaSJpwi5o8C5nIm/gVnJkFfFkFDe1UulKKmpmaKtFM8iFHOu5xZKjqciS7nHQvPwlpVCiVV8zAdVUkUJdXNrN8ddk6fOraTJv3QH/Rn3dlsgAdM5tjZfDI97nbGhjP58mtfjKZhquwMhx3Lsrv9NnLX0mD/qI00XdtGGbECU/X8aDaZDrMsLhRb2Twol+qe504mo3Z/9o0v/ZbnXTs++bPdp9/76ON/sX9837Mr9eqG65RyihknqaUn5737j55/T1XqG627Uar4QffJzo8e7/5gMNyZx+2c2rP08uH+wVKz0p1o2dy27AaaZlkWYTeI44kfTMIIBcIBIFAWARdHNEZ08/F0hrCJJwgI1Z0ryCr1gxAFxa5dx+Gt4WS68BqimlEaW6pGtEf0rEw8n/dHfq3kFmyLdyt5N8tYG19XTp7t/vjg4Kdn523PXC4VV9Zv39s73kOXDdOtecu+P4nSnB8HSTr1w261WB8N+0oGfMM/jFrN4mw2CkMnjgNulc2xR3OeGlGmY7JMJImzZB51B8PB+FOCMjDnVnG5G3TL9taTx//9/v7J4909RjIL59c3N0tebTiaV4qTQmllNpt1+rvn3Wcz/9yxteH02Sef/cnR6SfDabuULy1V14LQazTeZjm9Uk3RSnlXtYwixj5lxD7WbaCUOMyCY2KcIz/0QxQjBDxpb337d03wxCJS42aJW6pO1OVFihaommgyx5HULAIfLBwAv0vEF7VF+rxiEfDxnM3yNEsuiEfXlMGo82T3wyfP3xuML/DAy7Xbhu3sHh/WipUk8kX3k7mWGVtbt8/Pd1OQRJybhMlgdBqEgzCZnXfOLduxdG8+Zz7Ksxd7o2EvX2g0qquTcV8xojSdF0pmwS16rod24ACrhaptF5ebTrPywEgOH+3ikUOu3Kwug7fWmpUrGzcdb51wPJ6eHl+8k84vio7nB4cfPfre8rLt5J3l+lJnfOGZV/POMAz0ROlOJgf9fj+n1BSjHERRkgm8scFfulpwLJzkYIaHiEzDAEJoKOQXfv13Wfp5mjqOg4DwCLYFbshmAYhPZEocj4kjUYzeSGhCmigYgGnxxaziVABpbp5eWa41S16jVkmTNIrDMAxw9o6VVxWjVFz3CtUgNKLp+XTW7fbPGP48Ceq1G+fnextbXxiPL7L5QFFHxELLKAwm/bOLU03P1tZas+l4qVUHoI3HPkMLfEYSRWlgaCbAPk6js/NzQ9Pz+ULeadzYdKLo/OHjQWeYWyranXFUKpUnQZ8gvra0UrSKo9nxzz7+Ay3d748eHZw8bdZWV+rbhHdXa5RLq6AgU59Xi2sPn31cLtRtN2lf9HNZjPIWy9dNs1jOe/jfGLNMleF0NvF9jNh2HNwmLhWJa29/+/cQBlEGmFNwHLQRGaGxeFVOIraAluI4EWXVVInpmPRCUXVQAYLNFBYKTN0oFVbq5TDGdAP8MbEijYfTsP/J45/4YCDdmQXqbNLbP/7FoN8rFmrBdHjr2peSXLq2/vrx0YeZctpp75fKpaX65vH5aRAPALjdjm/aWaNabtWb+EzHLDKD4ag7z6lxMsFl826tUsMjgTgCP6o3HeDgkxfn+wftySy3vVrVjHpubti2vtpcnSezw9OHHz1+5+xizw/iUdDujvqEn0J+9faVO3/0g3916+ob9fIN28henL7DRFeXNh7tvF90Nib+yLb0H7zzvzuOuVy/HSTJeBYQ4uMUq1dmQdfUXZRyGpApZRKUFjFbIjb6jPjCKEQNsXQSHmyYGMKp8RzwuohsguY1NDfvOEAHEMyN1eZ6owq4PewMF05CreJaDFB67pMnPz0+O8ilhqLorlXYO3y3N2gHUVytrm5tvqLoCTlCNBvZXvHF8w9KJZUYfXjQS3PGzB96TpXxhbP50ko5mGZ+lGqm2T3rgugAK4wOr+p4jm0yHr3e2Lq2tXr3xvb+yd7peT/A7zqubQEH1bE/IqdzXHNjudkbto87ve7wfDZNx8GkVW1alndr+82Cd/X5i0dxLmjV86a5snPwcZz6lpFfadx9tv/p9sqViT/GsD988L3h7LNGoZovrINXp7NZf3wYJOPBqI+eAZHG/efal/7i7wkcQnEljOEUYgK0qmq4Xo4Dt5AvjpJYRnYOgq3kvUa5OPZ9PiDmP8/GYXjcGY6mAWuAdpc9QU6oT3fQb/dGACx0qlpqtPvHh6ePg1ksXsX0ipVqGKnl2vosmKQE6CJuVx9PkkK+EaSzyWgwHY8cp4xtEykv+if1cmNv9ywKCERxEgdOwcgpseko0dTGG2wsLb9259VqpXGMO07jWRAXPJv1IAcfA9cIatFM003VjobTySycTqfcCIPUl2tXLLtINFlqfe7p/neb9SXbind2dgx7Xi8ubW983R8mj58/HPlDU48m0+lo1vbH79es1Mnfnqvp/unzF3vv7ey9Pxi8WG3dPTz+mPgDGBJ7lmRonrUqpDkG5m8bBo6RvIq/CAqQaWoquRo6OJnOOAWvCtyJ0Nx0Xi145YKz1qhstmpEOol6QVrIl5u1RhzEm2u3NSN/3H5hGIZp2p+795uvvvyNwB+//eZffvjoj29ffbk/3AkApzbiQ1rRPJomUWpZjavX/2K+uIaXWVtZe/T0M9eb2x46J5TFnbsbaGbRvra9/cata7evbl25srF10TsRV2ZkjXqV0N8bgsj86SwgnbU1Ow7GL16c1cstL++iHlN/kGRRd3gK5jGtNc+dxmnw+Oj77cHTfAkDTWxb6/dPktzsfLTvePPhdFyvEB7C9jg5GuxcXHza6Z6ZOcOzWyVvZTyYfvzp98JwogtwTyJkpwL0CVS6RuQp502JVJnC/EDsQRTyDtEUuEhaNfFDXAMYFc+MtwU3YIKQAeOZD0DAbecdQ4Blqm6uXun0zk/OCOK5olsiJ7KqS9eufEnJJS/dvueH+194+VeGw6PX7/zq/tnjXntnNJk1ylv9wZFrl2u1jSRC8w9v3/y1w4OHAKdeNMIX246xsX63293JF6yCW12qkVG4v/r21548/8QPO+F8MhhOtByDIo2BqgByY2bpW2983lG0gqGeTCa6YmrWTN5Vne31a3mnGQR47a5tuK5+5fz8zDKUkvM5FvXFxYfPdo+jMGGZPKsRBVmruFot5jXz7WGc7Oz+0LWavc6eos+n/mFv8LRcu6195S/9LYSI5hGaEEKYgimFfCt6FoDT0rVKwW1UCgyKdMlC78V8FqmBpoC3ivm8KAz5p5IjIpU8J2+xMAYZEUCiNxgSo/qjM3yoHw4NPbu2+fqbr3+Le60tXe92T65uvxnH4WAyNI2KqgwcpwIeG02Hmua+/tpvffbkx6/f+854PDs+OHz17m/sPnus6OSdmltomIYezPwoGcRJaLnBYHiuqvpwEj58eh9FQD9QDlBqpcHwkryTc/RcuUqqYYIjT04mQRzg4j73ypuY2fbK58mxdo/2793+95JAaxSXC55FHDk8vhiFO5qiXd/6opEr68qSV9haXX+rVHlJN6v7R8+PjvZ6oyOyjIvO+TxR0xiDzulMAEaP0I1UiUjQefw6m/mSPZlG3rHxWJPZtAowm4ajWVgtuJh9b4hLAlHpJGqeTWqUlDwbaWL4sBXELcc2fIitzFT1Qq22EoeBZb48Hlevb7+6XG+ZmgHJd+favY8/+ZesVBDojWqu6Lglb/Pk5MywNifjWdGO7732GytL13b3H9lOpd09vHHz+tHujp2vDNovNq9+IQ5yB6cPEVBO8549erC0vtXrxI3KS16h1+32xqMUGMLwFHVeKhdLJSMKLo5POoPzwebq5nE/KVac6RTmDu8//tMf/Z/Xb965c/1tyx56WdY+Hz04/fi8172+eb3ceN1wqjir5aWblpknTpD7+f7JeNqe56Jhb7TUumFOlEoJbzBrd4+I8v8R6ylaBr7QgOQqwQeDAbdjv4gbECr8sanjikDJuFvsvVHOT4KomLf8EHcZaTqit3BqqCo6SURibcANrJQF/UQY1vTV5a1Cvp73atPJ8cOn/0+7+7jXf77cbJ11749Gj+K08/LVV/7kp//6yvKNzfUWGeWLw/evbRT67cej3mEcjFTFvrl9LxdHp4dPNldff/rs50k26/ZGWs61jMzKnH5nVjD0SstzDfFXMKFMvlCwknlM4l8qVvxuYOS8+3u7fpCUi5V79668dfebcZg9fvxRu3fw+t3vVIqtvOZpSvEHH34fWLVaf6lZf3Nl7abG7A3XjyLPa+U9wR7H7fbe/v0nj99bXrpdrdRw/dX6KlHmzdvL2pe/83tgIyZPcEeqxG5YEjwjvodLwNlCB5IIwcSLlUUpqkqAQuiwVUFETLdLeSeMookfQc0WXFwciAqcoEYh3J1WAXDbnpoLOr2ng8Hzz55+96OPvx/4qmtqnjsbDs56vemT53sjv717eODP0r3Do7NzxJcbj4Mk5wN0P3u0e/PGncHkqD/o2lY5mIzPjl7gbICk5J3BlBwrGfSTWsU5PD5fvVJkfDOCUZgA+aBLPVeHx7q7ssGR9hA/rwz88fb62sHZYatSX62uP9t7WC1u1+v3PLfo2PVnuz/5k3f+76urb26uvQEQB+fly8u6xVtCTYC8Z4H/4vDR/Qc/qNW3Gq1NoBC22qo25sm0236iO7oZzGMmgBpqIHQNyUqQcUTKOjivBxmu6ZMgKMIreDAd0KB6dzIj4ywVrd7IxwM0Sh6O1bNQDammCFJV1VKlCGxA7PNssLP/04eP351NhrD403G83jAv+rueu90nds5GMz8Aq0NMbi7f/sX9j6BHu+PJYDCK09D1XDOvKXpg6ll/9PRMMhNrbuCUeokOjNP8yXyQS2bjMAgVt2DMw0k/N4H1x9XiJZk8oKVVcSlNWI43i8c3rq77SdVQB2XLfv7iRcUW26yVK+RpuuH8+L3/7cnz97/y2jcrpRumXVhevYuNnbdPG6VlS3ejJBeEuCh1Np3k80u3776ZRGG7c14tbh0cvci7llb4vPZ7f+efACcBSRiowHGhjRFIDofIdyHhQRUmlFKesI2/Bd8TtpbKJRJAnAC8/ALAmvW8M41ESVkTV1R8PvM7z3d/9HDn//jBz/7g3Z+/e3XlZV0rEskqZS9IJ8WCPZoClqEVwm7/Av54pVV9sf8cNw6oxgsR1bCS0WBYKFqddpfgtrGBvrW63eE4HAYTWDeFQJxCS2kpmru5+aZXuEBnLUeLQrVcWYKuqJeL66u1tcZqLtHGQe+w4++d9A2zaDs1Y+5XTG0U+lGWkIR77lKmmD//8A88AzJ+i/gzmUQHxy8AeqVCaxYmhmEDhGZRQpJDBG42ry63qg8efTdKQnTRtXP1+rqukukQx4V/I4b4MJkxCIE/ZOtKzrHBxgJAcEkx5QhqTBDFuEOJoXoBWjpNwK2DSaDlst54utqoAEjncHeW1hl0w+lhFD7/6Xvf73QCCPnRLOl2LlbX6k/3Py0W7fFULRWagJv+sE3Vx0m8SmF1NMElwypIpavd6SLTpaX6G6+9RCoyGAz8Wa7X66XKHMq9HXX8gZ8DH2sq/GRzrZFqnybjuaN7kUkuVbDnHuxNpVB0VePR4/31tZufveiR25AYnLXbFx19uVWbBLOqNdLjeaF5J1P0w/0/V2Nzee1us3ndsuumHazkW2SPcPOFQhm3lkY+GgX8KW2+nCTxJ4//sDM4KLsETIBuNe82Gvmc9tf/1j8BqwMjkWmUxOVCHoUlbV/UmAQmg6goZpRLeZRRCAA1R7gnrUNbHYot6bzomCXXRbWRN7pNigIr7o8edHo//2z3wfbKlwytMhvOR6PutSvrvWEfqoITpOQgfLZFAjMLQT9+Z9B23cKYdG7oq0ZGIYS84WtffqNes8FyytyeBFPXai21XiH7HA26pEm4HQaA9ilaPwpn416+6AE7J3tHFxksGDxpQWlW19rd81989lk8Vw0Y5lkM1ld1vMGMHDdMMk8znu09fbLzwVn30fryLTe/1e33ptNhkCjxHJaxRcZDphgks+H4/Kj9vD8+osaVpP7O/ofPHv/42s23PMNZX9u86OxBk+oIQiwcgtLQ66SeeBTBmxZqKNQokk3nQlKN/MF0WoXQIUHOwQgEBS+P+/FzOM+YgwWXtFqHTBlNMdh5vnTXtps5Zf2f/1//IzZx9+bbSXLaGQ4kkiSJ7aBWiZvXO91j7kPc1HUHJrzTvYghBeJcr99bXap9+1c+f+fWF548ParkLYjkQZ8EErw5SKZj1aE4iBOaRzNFs6Hrje5piFj744oe2nE8PT08bq1Up1MjjbOzTnt9fb3VrD14/iSnBJRwAkh3mcXI0IsqkXueTtqjbs8fT39848rF1c1fyynLj59//Lk3XwLUTMNZGPXb/d1+/2j35JlKOS6OCg6GOKVwPhwMKIX6sLK9+418XS/nbZJbsGOQZDgdyzaduUl8IvKAkKEh4AAnRGUuPM+JFKBWbPHk3cEA8Az8zDtlQjy6S0pqqC7kNNUCQ8lOT97//s/+zVJtAxIY/D/1XUd3u6MTwVKmeXJ+tqwu+eGIcFjwPIjD0XgMpzmddVRduXVt5Vtf/Wq9etUPrTALfvH4A0iAyaw3OJ/VSmuz3OlkHOEXgr5SbkAjAjgp7qAbcXc0eOnm1UI9GE7ifB7HMnu69/z1V16fBSn8//npyIeWnJOmaCSBBSXPFA/Ox9da7lGnqxoxZvF872HJG3/xtW9sNK50o8FgQrkh+PTZd0+PH4/8BNZ2Ho/MLOB2abYD7ZGb9wyrRh1kZbn16aMd7e//o38GgqF0iYaCCRAQGh5G6WQ2gxUniTJJ3xhyTsEbELIhQfDBhC8cnGOQKUHuJmgpWl5cICpyJLiWkAx44Lea16qV5ftPPnUdJVVMNHcy6YSJzyhMJ4GWy2W2kkuLJQ/7nvgdEoqcOv/8Kzd+69e//tMPH/ih9+HDH7VH+3tPLuJpOuj5aaTE6ciyYpXylA23opm2oGVJmVF0wJ+bjWa9aJ6Vy9TotkvFAtXCk4v+efvk7KJ39/bLo+E5XhE7lJo6dSiFWmycabhA5aI3gfYmraoUMaCo2chdbWW9zvSiw8CGyjwctM9mFBSA7WFvPDun6oEZUYqrVbS93aOT44sgC7R/8I//KUHctZFmTlAIhhelVKLB5tUSBT9XN1QEB4HIhaDO8QDgKcItgdw0IMd8/APAALdbq+TRWZSXTFY13EZ9WU2DH7/zQ8t0yuUqDjOCEZmegcq4V7Fik52NJheff/U706Cfy7mj6UUSma/dufJ7/8Ffvf/00a0b6zt7tIy8YEr1ivX8adfLW5qROZ4KdzVPg3IZ3cR4FRodZiPKBlJOD6Y4ViVf18JkWiq65dL1vNeSgkI4u3nthu1o41EPk4eHiGMFwA/qolEE6N6suBeDHiYIanE9e7VZSHNhTpvayvijX3z6+PH74/EpDSL5ksVyzJV4Fk0BZIiLQXT6w7kSQaXvHhxp/+k/+mfUoGWtaPcwtDSRLhsaUFwXMXFYlaQny8DqvACiQp4S+rujCZKtkWnCdkE/Gwbn+H7IQXJ4slVkmqXxwf6HpuUeXRznXbIwy/WKp+1n8XwCgbe+tnJ988tUK09On3JffwpHPN5Yvv7tr33x4GSnYJZe7F5wHCSehLblMAA1DKqrrVvti73pKDYsT3FCUPo0AvpmhqtUmiaVKbhyqtCmZVfrxeHkAuIhzWrB7CKGXQr412mB8omgaW6WRMCZKFZQiKJXtEyvN+wy8moZ6EHtCHg0AR8pVrS21Hj85DkZKnrNHPGBmJpCos6qRCnx2NFrFPMPD88BbWoKjgqi0WQikSE3L+SNpbq3sVJtVQVT03hkmRrpOejKk4wJuxIURvBBGRErNAq5PyXA/mQGD4YIxNuje6wROfnm5yWrSqdxpgzHp5NJf23lKuuDsq433gQWTMPT9fU1qiUTn2gTffWNW/cfPdjZeVCtlw4Pn9Hu4Gl49YFt3wpj76XPf6e1ddUxbMtVR8FYpVK2qDhS5oty6cSPTRtQok5yymCahn61UVtP5+Nn+3+aag1y4/lcG7YpTGbXluuj6dx1wTBaqWJB+LtGUc0V8pYZx/PeIKyWaLZq7+4/ebzzZBaMl5b1e/eut5r51WaLwDuZkXWHw1487IXtM2gWzzRXR2N/iu+IMu3v/YP/AlxEpggkQmw2MtMg92PcJoU2OA7oW4ToOAZUiO/HnEdxHu3FGyAanCupOtkp/UDw01AeOFPLNjB8FpKax9HBJ3MdjirZP353MprcvfPFs4vPGvXKV15/6/n5h93uxDBc0g9bj7/0yis51X306JO1GpA+NsiXhr0g9IvFTdu6jSm2Vl72Bzuz8bmuh3M9Z9qUtJEJrojcQsKSlGQoWMeK7syJe0puaTgaxlEvCM54i4KDPx0htf4IFjKEw59MgrXVGvWa8XBKdd/QZufSDzAnfBTyCUCHppJypd7tx2+/8ZWdg2dE6U6/h+LhFbnasJ9Q201jyu847bDXH4EmtX/4n/83mDAhCwBPcEe/SIH4g7GT76BryJFYBm3CUYqQrKZk/ouCFC4V6bNetATpqk6ejKpCo7DO4G1cBGaiKaSJo7OL41lwkWb+je0v5rL+7Rs3yGPH43Q0CpZK5DLplVaxmK/ef7pDBLizvRyOTpPE6E+HB8cjWl82tn7VcqpOsa5rha3Nuy/2fxZkEfgf12IYzq1r63XKWSlJsJqGiDgxLI32iP7gZAawkcyO3CnDBRNC41k29oOVlQauq1L0mnV3OIw1xYNG0ZXkpN2Be8b/DQek46pr6efD4UV7dvfaK5DWuy/aZxcDOnioS2Kg5YqHKs78ie2qwZSyec5zbe1v/O1/hJPFT2ILFNmJfwQ+8i3qiIZCiBf8RPEY1yGsKaGUFhkcAbrk0i6QjCcUqUFUuE4dMkyWiBmxECQGvNBNS4ve++S7FIzptHLz6mrrJUijpVLLdbZ6w3A6njbL2lJl/sOff1wpF87bvdNu52qrvHN67mjG6Wg2GgPC84Xylm3T0qOurr6SmpSGdkeTU26VxWqaGGedDoQAkcXJA/fQXJhHxbTLFMonk7GhW1QnZ9NQ0ypXNl+n6a7XPbAtMun53/zLv5OG0188OCoXijN/dv3K2qOdHVSE2p8y18ZjBZiZU9NixTo9PXZcvdf2w6m0xxkUXyMfKnY2DZAVanfe7uAVAXwS3DEZMBMWk0o3maRItIVgs2S4jBJVRaC4AjlhUbzDrgxT2qnUnNHuT6n/49Y4WPBgmuhHiKHsoM4oDcJgxaq0dWi4gjO7UDQKnlKrXNleuzkNJkvjuAL2id/RM703jjM8fBxQgvnJpy+qZf2sSx6a1etLBBYr61QKlXqlmagNPffg6PgTlo25UgjEPCr1PC2I3bMgGGc3XyuRCkm0SU4ApqTJowHtHZFpJUdHz6cDKtKrttUYdMeNFWv/2ejho04pT77ijaaD6Sh0DLwJBWoMEcNXe6Ns2SpP2pnq6k9nD5dX1tunYX92MZqM8C9o3YL2gJhPy/kK7XTL1WXt7/yDf0rGSNo7gT+ehHQOkmsSuMWsUdh5SpYA8AQISF+TDJH2DVFRwrogJEr+OLFcbuxHE9otXMAmqxfjZBkWPRPD7vNJmKPBwo9H1Jk/d+c3G62XNaOE2wO5LNVCR+s/PZ5hJI6l4Rkw4cl0EGVqrMyFgtPzpdJauTzf3v4N26opevHDD/+X45OH6AvGAmcLLY8gCqU8iArS8eQQw8c8JIlihLZW0TKXYUNeUCv3ozFV/vOzthR+g+D4aPfZ0WmlVDg82UWxSsX6YDxkonBPuk2akBWKZIM2qn920VlulFGa036bOs14RAVMrxQKQAfSXlN1ik5p0J8sN5d03B5WHpJL+xGAjFwhTZCcwqoyIGSF0gkJoUmrMbbMalBBFZvnFw2BKlg6hDZRgaUIcKLACelqm3NNqJdELTTry0FY1cHc0blurMExU8c3jeJ0Zs1G3ePTo52nxytbq0fnZ5oR0b5smUBvS7HyeY+mj4qX37i6tjodX5RL96JJu9391LSpKBuEA1jCas2BeUrn+M4c1O2d282DnfOEmGbkXEw3cjv9I8/IteqQMieFAp2tfrFa1FnGKTQLfozqw4lnaqcXp57tEXmH9CbTM2jSBhYNxr6RuevLdcpz48Cf9c7W10qPHh+wWJ5nDUZjKgJhokDAkI3mPRqrS9pv/fX/bDQN4dcxYYlIEp3nE9qbwxgNQIbodpxIDCV9ojOCrjXquuROAfQ9Q4Juo9AThqTyKB3+AWkS0yjMzriCVJ7V3YPHxfLK5sYbmlq8ef1e3rO45nBy9t3v/09pONnf7XtFDQ8AQ63S0eNnJmEzM9ZXXqbF5eXb3zi9OLu+/bVqbQO+du/FD3cPfxrRlAinZYBMdeosipEjo8C9lzzBrVbeohECm8KQJhALcwjJ3Hl/gkPLtBTnRhEUdanVa7SlDIeTvJNddEcAzsEIQnFomCm9gGR9tWqp002m02g46W2sXFttrSyaiyfTkQJNdeP6KrVoyEygaqNOg4xTKpR1K9O7oymrhF5awsoDkWhzodIptF6M04e2JeylVN/AeKRSKlGTaMX5YB1oEaIQRXtVc5AR0Yk5IGL+shiSg9KqZ5Rq9avFYr2Qh+wvJHQezKL93ff/9Of/Q8Fp1YtbR8mzPggu7au2amlKoepG6mx4qoxm03y+ddI+Wqlv5Esr9drS2cV+t/NwMhtgFiyeuCFqM7oZK+E0zK6sFQ72BlUrfzjqKYa+vOydntNypGdGTrOM+WxYr2mzhEpiWC47nYthEqewAePJtN0h689ZwH1yeenfwj9o/S6pVr7VbEymYziqzw4/OPnz6fbaRpT1tjfoAlieG+NGtQTBqSlWs1H77LM91sk6N7Vv/M7fFRYtl6N8DYHMF7Ig8xkBxlQdRcCECy61No2wiBXDK2DO2JhkzjIllJS/cxpU8B4YIsoDZkQHwA3U6EFohUJT1enFZfxIIj07e/f+Z9+lqE2zIBKJpv2d8zMa6nUldWAdEj3TzCBV2u3hN7/+H8KJfeGN3zYt2n3c8eh09/CHZ519LIPVJevAzZiKVa8s0bynKZVGJXe8Ny67TiCNbE6l0KIMd/3KG0dnOwTdStnsD+gpAryQyKG/pkraOp0k05T0gXgLn2BYChkLrS69Ph4e2tjcWNlotfKqnUyj6dl5j2ZYipm9/sCUGOyFsb/aWi56nm7mNtaWg8DXfuN3/h65G6pHsw0CQrJUkvGEwH9iZQgahHYiFwpob1u0SCkKeZPAUrCqRCYJ/XyK3B8ulrURgJ3lpBxCnxFlfcYu8U2FlnN0bTR5/ufv/K8/efddJdNXljYz1ZsMHlZq0M+DvJlxhbFv94ZWwWtyFVLKL731rUfP3ru6/QbUPt77ovPg8PgF6QRRHoGGITxOVnUMqAMKE3j/PuXOXmB7jlOgFYPS7Hw0Ph+O+mXPy1RzOgHwS/2x1rCl2m7R/JEzo9yIeoqmlT1HEQ4j8yek/HBnfrszo2xaKQPPx9MoMbPa+vI2nZyGZh3QRTCaVsslMoiclhzsnx4cnnJNMlJKnrzIkRIhC1SO+EyOhG+g6QVpogzoLsWZIgUmS4cHiyPxEnxB+jErhIgH4DNUFPDWwq3gPlTNTdIOyk6pmq0StOYmWvf8X3748E+HQ/OrX/pL83Rw0TtdqpEKUSmYu45Xtia7PXHDtledzsIvf+GbT3ceFvPN9RYVgcQplAcXH59eHJGa4XNmfuxZOk5tMJ3USmqxQuNcWCmUz2wS8KkW0oUZ5SEWy63Hj3dMRuqQrWX0YIxnPdrLwpiuPLvfnyl0YzSKg0EvmiQ5stNRSpaFQXTS2PPytlHutcM/Oz5b2/Reu9k6cdzpMD09hQIf4bsqLXs8jPZenK+0WqwiGXC1RquhpL+CNKVPBHZwTvtrSk/xyPdpRyHuQMBQAWMd+KUHuURSRGASJEUFXxhSyp+MD7eJDyY2FCVUSsoPfi05RpVwiESJmf57/mTkubfo0hlP+qMx7WC5g/0dmuLo4pwKAl94Rr1cr1ZWljeePnvntTtvf/8nv//Sy79Cmys7CvLVm2wfYrS0odFVyNngXDYDnEnHbfv43F9dvlIqO2qijruj2ThzzdVcmh+Pp26eYjJ+CSYsIRA7enk2BpMFpYLux1FYMrfv1mdxqAFE8kBafzg5XWuVamWYtrhQTVY3S2Gc7Z+ojfzs/OKzBw8f7R8eNJfq+zsdfxpQX+i0B6hUq1HvdgbaX/irfw+LJhwhU0wXQI7TZHsE/g7bFeHGbNphb5bi0/KcLXprubycSdt4RpPIIgLR+bTgI9nABN0rDDxGifKmuF08hYL1R+FZ+9MXR5+qSj6JpxDhsO0FJ7dcqxx022U3G8dlnO9wplzburW6dIMu91vX3m5UN5K5dFnV6muwYC/23pn4fdwgNS78jaE78BFBGLge1PgKxKBmzk/2R1gbBk0mkKbknnitHPxtOb82nnVdqxKy12M+AxJSlWBVOr2xhkcsWBTUvEKlP6E9UdTIspxyBRyKL4vHk5k/UguFlXsvlWm1TBUrmKYxOCebD4fjWr3S7Q/QOWLyAk1S8yVwomDIQNyo0B+CTKN5CECmOWie9tDDNCPNp1NZKmkwH1in9EiCoOflAjVa0kxBKottJDAmAhkI9EU2ccieLHDqrDt8rqqVRm1tubG6Xq1PIYiAkDHY1qDbt4ftq6SkXMJNwoOvfemvjcYHmxsvU+9eX7/BClElp/zKoMRL8w9jCvy5Gnsu3J5Ca38QqmdtUk/8I844zLTxLO6SO1JDgBXF/JZam9tbr9LqQ0yah/oUXcmBW6CWIbeHqRt2JscUziAVHVuZTrukfFfXll2zkPnkisrJyenhRfTF16+Va6kfU3eadi4GzPPo+MzWjTBMQPHa7/6tfyy1eJ1mKNYVYcp2GtQLREmdGWvlV6AnukMEx5pRFiRIHVba4kWsQuWxbY9AL43NgCw+Ltk9WQEaJE25JFSOkU67f+R6Lcu+wioWlE5v1KUANBhNTHN+NmgDuMIM8j1SVWsw3nv9zrdt0y4WKlZ+NZ9fBpbpoNOEfuLdZwc/Q+QiU+6QWhhQq6ihpzQ0aNpVtu04tte7OAZP6FZMq16jugKALeWhR7tbm59/9PgdPwAzMdMcZT4cATsQF9sxdC631KRfYcYK0MfMXGjIRMXMnBsF6uMnbHxS2t2e5RauLOUvxgNLNVhQJko4AcJAX6FhDEIpyB4V1CQBJSBSTkEl6agH6vMX1QaoE5xM1SRHQhx0PCDIkY8HmJdBOjTeEY8NPivsMiml71PFxvilwIcjEHoqmi1t/rXs+INHu/fnMCrx+acPHqpGFYdLNQkgOxgzKTdWo+2lFoyM75+/+vKvjSnzJykax/LSBpRmZpKjmUVH76OIThupIiFVwDGMlxOV7GJ1MH5erS4b7JEUQzWvb9ymnnCenrClYWXtNeneT7skxcEswSVFUwrh86prnI3oMbb0SOuyrSEHM8F852ZOsq/zo31VLfd7um1YL/Y7Vzab9NSXmsWVaqWnpuOpkrIlhcoSFfh5yJ4zlXawRSKos1sEaRJt0C+cAVogDoK2W0ZNxwPyoukkjSdwqz4V0BlTwT9Ag/MdOycdkNAvIF+FqiVLwO0W8zbrJvdzmope6g7GH93/4+VKcdQ/n8QG2ygtS1An39DBKOw5xrzbe1qtbjMrg+Z83VpqrMNUkkGwM1d8TjgtFSw1ozHNEx+ukQkzSPZUsM9Mp6O4XGlsbd9a31wHHXcuxnFc1FW2MdwwnVqpbD189GO0hS2FREm0CMMKI5jGjJYD3B7dMaDs8TQkXaBZntIxq2Wp9vGp78/G0XwClXVyNnj8uP3hgz0aU3Na5JZjy1OZIDsz6fjuj3pqpWDYcErwdrQysGjkjNKHjMKrYHcQFLaMlkHISY84WA5kTNUchkrJUREhkafQjsxh8/C9FJxZLHSfaVOvx4ngkmH62Rmmzv3Tiz/DapKIhoMJBBklgTkZu0cXNhA9x9bBsqWClpuNrTfv/Q5NzCSs9B8AQ6iMspUThcTw66U1VID+duGb5nO8CqkXqDQa74JTivnkk1/8oemNSY7ZZhJGZqG4UWtsw489ffooQyUiGAmVrD2YwaqQpWQBzXFAg0RKSQD1fMlQzELBzSNW+F7T1b2CBmTx8sLPEWJOzrs7z7sPnh1/+1feMqifF4w0zEgg4e7yZYEh1AzxlbQsE9dIjU14PsqY0AMUWAj/bDHjSiRR7HsqCCaFrc5o0YV4kzgrFBbnzMl5Sa6xLDwvFyU0cm9oAUCwhFNlfrH33dPeea1cPzr44KQzq9e9XFJmi8ZlUVfLDaGMtby7VN8GFY+nU92peCoamLHPA6hLnoYvmo7HJWf75OInao69yPSb00+Q5fM6TvHVjWuzSlNLzgpA+MzKl+zJyO+e7b31K98CrTzdee/45DnlaupeJnWMnJEoEXoERAkJu2wkpAmc1syq2Wgy/ErIvs7Az3uuEg5LDs3gbIthydk8GeQMArUOUVus5V++1to79ZdbWqHI9g38pK9TLyIVo+rtOvAakqRTU6cjHHyOraJrBJ84oStRVBZVpgWH1SCBEKpBgTQCkYh/KHggRJICwhk7bGRnKW4U5hzpDGEAZ4PPnu3lndWtcpuuDqdEMzSzYhdPaeCfrSzdJIwNZhk7fG271mretm0KenW6++jsAKSxnGBklqZUuTbtf+oZ9jAU1EyfPTs8+KySxb3c/GYtG7fH8/zyXKlpxs8cKz4/fKRpiD68OD0xVYoN9P9MYeTghjG4RYOcbPGEWQnIVgBhIbFENl3c3npt7+RZ6rcnQeewo7CkkqkuetCa9Ifn1Eaj8dGDD1qt2rOTkyS2/QHVqhzdg7KNlvGW6QVSpK2hWpZCsWz3mEM7SVIp6RlZJv5KdmvzNaesXNfYgDMn0+cMSazwCZi6qDOXQUzSQ8oroasASq4znodXbv6VKPmfaXE08zB4oyePdq9s1sleCDlJOF5pfc4Y9DxXvbb51tLStlOoQMgSAwlKFPjgbDB5TKdQ3aZLzzx9Pg+7eB0Xfm4OqZIVnZprew3b/vR4aJY2W3WSl/W9wQPW+OnDfzuLiUVUtkw0QLNUIAGLzbWxNMIdBAa9ebLNhcpcByq6NBo8PjmiUpCRsE0DcW54P+ROB+AC0hLJzM+eHGRJK24MQGUQZSTjZLuunkj9B18kcIn6PbonjbLCRZO6g0ERldgskRiByTlUNTiR5EqKY4gbf0sUEhhAtsoBFgIgzwZpOVuBJcTvSjTWbDjOvH0FxWRxmiXtSbaPvI5O97eXgQOkQsMb1z+Pr2mtQz+zJRBEzQqRFgviVHDpi1yO8nOSHVVrawe9XQZGvKZBnf0WiWa0avc+JMu0CTGUJaxmc/l8/8l4HLWPz+qrlXTug82BsfCRRNwgGmChOHj0BPRNGoPnIsDh4kbgoVypM37OrsRyDZ7ZoxdCFIUJ0p9nKJCntt2AyTzvTtnNVSkWJu2pP4k9teiAxmlrBbnQ3oBZsW7kO1AfAgJSXIyYLR3gonv04SSQjBosCXJjEEhs0YlLm7KsAdpIVZzJ8w7f0VnCGwkX0QZF5wzaiQq1z537Zi1/Ql9CnqYy2+4OLs56ySubq0p2mItu+1Cx7B7RytzBsrQGvbsxrakp+QVdB1S7DLeuGxWFrWum6zm0Dp8xWJTLy81m0xf98X6+lNYJiKa5/PJ3njx8X5um+4/v11fvMY6tzSsZvgt70qlCZ2zmHZGWATKk5S2ixAC/TvTbaG3nguHT816n1yZ1oumGYIxt4hIJG7Tz0cRRALRkx8v1rbPuPkkUvA3ZRjc521q/qU98SrioJDFahbx3MWkctSBbiVS4RKRJPEULXdXFxs0UD6DgFQlJZJZkU5geJ0jch68TfloIAeI7R6Qvgi0Q7EOCRc2vxnPaRkqWwVYPnrWwhwrGOb8/mWTGa9Ct9OrU6zd0p05nDPk+bCy3RjXgAmBZTS2zcT05o3jji3Hy/tLSNSUt9gdDW/dZ22rxajW/8sR/XCq5JbuwtE7H8iuVRlP61aOANrPl1ZUsLC9vbBwf7vjTCVsMl6hixvvsrgJiEzBod2hW19H5pdpqMKFI7o/t4WTg013aHe8zQY8qg0qRtVwtsSnPoK1mfeXm7vtPsLOYPDdRWdLZeCr9chgu2s7QYc/8EOVP2KD7y31LxA1UjvoTAV9LeHgDMYeoQxK4kB3eBC1mDURDQd6SOpEhAWBnELiIEovHHwgIUzQvdZbyten58axRoVPKdQo0es1gPfaP7n/7W/8dxHhz7XWuQD95HyQk1iIbedmDgyniQLEPIB0tVfSYgzj0zPP9YspKa8n66utXbnz9wfOfbdZvN0r1rc0b5TK1wFceP3jMiqp+cXvzWqdHxkmCLt5/uXR1fWW9aD1595MfhaE0G+CdxgGPbcg92N3vnoeWBn7zGksqzOLJSKdK7PdJpZOoOB1PxueDRzRd7x8/RB6u4eYLyqg7ZaLscNURBBpEmMMfiXiQy5yKW4LN0vDEBkMazoTCw40KshO/Q10UtcTdUoLn80wXfg8zpxWS0I8/QoQIktME6yzcKf4Eu09UO3OWm5vFswd/WKu+kjPL9I4opZpn8qiPJN94neRCNB3nCzuWkQEudp3isxaGIgVuPF4ux4M1ynl6ICzXXfGHab3g1ZuvUiG3zVyp+rrb2GR7Dit4/eab9r/7NzgsyqEbzc8lwUm5vmxa1sHBg0pl+fadb7Sa1x89fj8Fwk6nlHoBxISE84sFn8NU5sbZWT/cJPHIaNuMprGlOSf7Hbs8KbUsjS7J9gG7W6gnYozIhjoVHWSCQxGLxB3ERI+AOMCc7EMn0kwTyBv0HLGBiQj94sDpwIZPWjzvZaGN0owK/ZMK+0MAkT1O6HuSk/4CBA/UEJ3l6nxBuLlFJXWLa18uqM7esx81l96Y9vYrjQ0/qbeKS0BCwjG1M0AD68oVXAYWzpEzV8A2WWZ6wSzFXqpfj5JCV9XPeepQ6ZZX3VLTh7XKemXpVqW5RYpFTGisvdpabuy+OHz6+Mlv/KW/ETx/qKqrummXirVKpbm68VJraVtNvLXN7af796NwfnbUIecOA2Ueg3jCcezTb36wm5UaqlvWvarXvZhurdwmqE6HR4ozK60415t12n2P90ft45TWQa+i6yBN8fYSwjBMmGBRK4Yu6SQug0xU8DuNDlDI4tHBQ8IFyDZKSaJQSL6kTYir5MgLFgBcnkqABJQEtlLCqBB6In3qpJynaY3V2+2jhxDWjda1Iq1yql+oLkmkk8RIUBeEEm4XgwFpMD6giYcNifVQEcipla+75oU+2TNyK2enlcra25pd2bm/axeu4syLpdaCJJvb5bWN7dvw2HACL57ubGy8OgljGkTX11+vN27B6ilaMYtdLbe8vTJ/8uK+NS+ZbpTNJ1FA004KvzwJ/SzOTceZSU6njWtLaqHorW/e+fMPDsOJcRb1dp/1qfq11vQrr7tKWpcKZr1oYOmow6LhOzdFtebskxWFJYCiy5LpyMNaxGjZ10mAQJ8BGeJkpa1BdIaXMGu+kdg8XiVSaacnnoKd2KYP9gaXiY7SGQDok14zw2CDbbSeBccFW1tbfp2nfPC0ICIpMZB2ODAZzckFyxrIM6AEBvIvxBVKhVW2cuZ1ssSNtFAedou2+7HhLNteJZnbtI4mtDbL2omrIctaXn/lF+/8tOhBzndeu/2tyd5nQdQt1dY2tl6SLBKqTM+3T9uNVaNk5/2x5vD8lHK5E05Tn5JdahKjaUkyVfaOs1fOrZLZT9hnhzclzQbMSXTJkt5FxsaqckmtFpdozgFaarg+edoFXbWGdCqIrTIPgZ7yi+gfliboSKg5lFdkzHkYuUBFZkq+L1kmJwJUaSBBoxd5AcsASOCZLrxDHoXWi3C5Rs1ar9mx67H1jgexlHBUuGECXSZ7mVVXqgU8RMvow62BU2FXTK1KJ9VC2bm1QLS52SiXT4/e21q/4tCj6BaC7tFSc+2S2kWqkByr22/YrjkeTp4///RXv/13q8Me+L1cbILYyK9GtHya852nn1rlLc+o+rkx9XBK6CgP9Dskx9no2EcWTD1VKMyWinp7cJo//VOPClbgAbdDioO0hMkAtVatvn/QEYYIlwjdQjMjX8KzowUimAVwF0mC3iWKo6HMh6grdiuxCcAuCTaODdtG9Jio1ERxgkqu4EkOBqSl6iBCRqmpfEvxVAr36Ou8aDZK1DLZpsVBuEjGLSUXFkBYJakUUH3PFe3FhklVAVflIWPoyWOZF/4DZ4/Sf+2Lf8VGZ2xjfe0u4T3P870scVYSFdNkdf3VqzduHL/YmQxOT46eX9l+tV5f3VrfpIP700f/4vHTH/AUGdM1Dg8P6mxOyHK9bkIFfX3r9jd/7fdqnvf7//y/7cd0PsyQCjnbLKQZr8FeivUWaE9T+jaP6BgIww+Jrj97fiZUHUORECWqhpMTlL5QPoQC27SwNnQUCknGJ8++Qzs4elnbRMQk1IQOxMBTmniLXAJ4hez5hVMZB65vUQXSLKmOiG5eKrhJVLR5QhsrIViVpZEtMsR1PLhEJQXgkVry3AFACGCcsClBLxUnu/hDc5Wk4c3lTQH8am5j6w4bO9i6zT3ByyS1fILEpFLdfvLgAWF0cP7szTe/WnTTo9MfHp+9c3K2E/rmWfvMLZmTUbzaNFtWPTyje3LJMylBu+uttd/+7b///R/9qxfnT9j+StWWrJAtCLR03tzYGj97yoMkCkXEbkyTwWJrqbq63ND+y//qvxZ9vZy8aJ7gEr7xXRImMBDHxMYXP5juwtAFtFJmZG+JkBdztvgz1YVSyHnCAUBESTuCtEUiUDH2RaEJeV5eD/fDjBGJyFKuuVhQfvIKlpDwJYwqGQc2I42riwRH3CtLIDbE2GRcUiRYdLQpjuuxC1JgtcxC/CMJBxfhIUcvnr3Drnl2Nl6/s3Fw8ke93lN2hrFDY/f4yeCcMBpTWCfycQvPKZZLNVT7c69+dWVlC6hcKVUxwOP2HtGW3d9L5S32xDJymuuFzzXsVGOfb7XqUf2rY+70pQh3zRfZIponkruc3kJ5ZFRyQIYv8qHciQ7iFvmB5rBffhGRiBZC3xMOKCmI02QXhBi+qC6hWawYRCltPXgJcCymIBXxWB5AxgGqKkxe1FTEuWBUFlEM2ME1cRfCaqgC2i5RBUNidNjM4nTGLOiB22EMAEnZmAHbQE4vyqDdvP2WA8EneK7945/8wZWVLTO7Opg8b/e6ebeiqiOMjEwF700Q6w8nX/zCt197+S1WuUYXd7nRaq4dnDzGqD2HAWTHp8clt1WwVx8cvJfPl+mQM/R4lRYL++rVK3c647Y+iRc5HoO9FNvCcy4URpZZ9O1SJyRjWQgbfRK9UMn75RFX0pufxezzk4YR4Rcg3NDQxcwJ5xJGGLB8gR9QUpyCLBi7rkWUYsliBQsHI3eTBVwIVRwICy2PDRF6gE9Jf4qM8tIn8Qkui8zk4jLoy0+JLIUOFxKHMMtZTrn60u3Pff9P/i1tNuEosq5s4Zzzbh03vV65e1BqD2kvH89oZC2VeKylt7lxe7m1Xau3uBDZDrnGnZtf+MmH3wv6Af197CdJklyxWNO1eqVgNfXKSXf32eFnv/X1r6xuvJEcoQ1WlgAAKBRJREFUPpfGBcYr82Ks6ClDk8WX8TF2sSmp2okEfylQ7kM3KnQ27pF4wgfpFpN9orJ1jTljGhShwFdo3qWGyoU4qvHgKiXkF2mM58r004C9cCwQ3EAiJCyeWnRaRMibSIa7L/4gz8XqihaD6RaDE8lxLU5lqIvRcuRSsJDmqBNZHaf448O17ZVqs9o96+09PX39HslLfD74jGen3Lr+hR/++M/wBjyfhAYwyus8dadeXS4Uq/BCLCLgR9EttnR5emGo96ha5/M0Hc0ePP2gxRNMlVqtVjTN2w7b7EcXthWQzuKmGAbjXDxvDBEwxktpMmiZoJgnh9EzECQmeCn5lNN5ch3xhqVYrINIXCTE4yIgEoFRKJIIARuHcwl4NBwZFOkT+zTkfNyAUIIgdhwOUjW4snyCa/AlP+R6hCleyggXRxETP/ESMip5+hzjE0nyA1FyUAYqJwE0RNaLqXTaR+xTosHAKeV1pd8dHNON0Sw1lqtX6DDMdNYVmi23XK8Y5frT0a5uFiiWwvUyIy45C9maNXbzy9VJz3Zarn5+esETIplUAY9Tzjf9ae/ZwePf+Yv/Sa1+vTr34aFFRiiajOFyCMwXTVm8XgxYbGyBlFBVmaTMdDFFzucE8f+ki1jxIoIhf5w2wUgsGV8m0YlHR7LhA++fynUWXlMujw9GBAiGjEECF1v4iDriABY3QE+R0qVA+cFCyG3lZrwSOQrY43S0kRWUC/IlewQuEZ0oO3BkEo1P2nuNZu3oxdFkGO69ePQXfvW3T3mmRa7cG52xsY6noRbY75kPmUlLWhba4H6uzjXRiM7Z3tQfb6xdV/we3VUVb7mtjQlA7PQmx6Mf7ejs7N7tr/f6e6OpwbN2qXoJsOOToCd+MnzUVUQrWsBFOSYa8MtDHBcYIPrC7OQl58mLxbzkqBinyIC5oyoLleJhny4JJepoS1sKfT4LFoprcRGRkOSkKBx4i5UUKCxGjNBEIqj4QsYC6WRMi9HxQm4o38S4LsfDzcWTgKez1MDbEPWAIpBr9PF1bm7cPj8+K/P0yNTe3rxXKq28d//PD44fUem0nNyrN7aDtDyYcmqfbU4FCE2xLoajFsEOtrva3GQn/vvv/cnLr//7F8PTw5M2j+m76Iyy63keBRSlp16p8m+//4cffPyccrPsSSBPY1ggyktRyBGJQguZMmXmdSlaMU9xCxJoiLL4AXSRU7n7YlryA/3gyKUVypos1mMRWfggqN6VDbkiMpEId1gsAeKTdRURLX7wavFCTrocHEckHnK6HJE3xajk+gxlcTrayjF+oaIhPgdCIpcEewcPbl39QtEuNps1HiR1cPgcwontquo8vLPV/JMf5O5eu11bvk67gXp82vM6xNHF1S+Hzl7z/Bff/AtsZOlc7FPcOz3erxUqbbs7poe1fTSZBeWq2Z2O/ugHn4yG2e1rr0u7BN2A5ZI8tZWSNM+LETmK4qBdGKiMn4FRg7+cBzO5PMhdOVOsSrSI2CK/yFvybzFd3kHj+EWOY2JcFyCERIBVcvpiaS5fyC8iI7nXQs0X68eVLuUqY+FsNFaMQK6OoDkGWmBxFwOR38UqFu8sTlmMNJ0UCq1iaXWh9WxJZCCz45O9laWVl27cefeddyijbK3eoq7MOvAoRgx28QgKcYOLe+bKlSqBfm+fvWhLS5WVYbezef3OceckYiORmvWmO5PhUx4E2+tN3n7j1yvFigphgeFBLzNEyQtlQJdqQORYBF3kIZJZ2Bo3Qos5wNfl/LEvThBuWkS/ELZEbJkkp1yqkPjJhe4hLTlFIgev8MwLyXAJAahoNvrF/bmOfP5yQvy2uPIlfyW6yMkMQMbAasonLn/np7yzWIPFWCXy8bioVvkWzz4iI71x8yUUE179xz/8I8cprTTWaBNfblRatarrLuXLa/XaMt5rRqiiQUWaismNFikhj7s2vRvXXwXqj3rnzebtm9u3weGalvz8o3/nGOVace361ssbK69VKndBzcK0015CnkPScBkORHcQ3MKGZIZCESEebicInEkv1OSXAgOJSpziPE7jXIgEpnkpUXEMcmgBXi8vwcWIICwR/9A5WY6F4OWQyFHQhNxZLigmzpUWJ8gSykHxSgu5y9LI16XecpYMVM6SpZbP8EczvXrjOk149K8bd3/10YOPK1Xj/oMfDsd/O4uGu4c7t7d5JkVxPNWu3/76ycnj9GffP29fsI1bhiCxAfTF0urV5jU2gBG+oNEn0/jq9tccZ+X58U9a9VUeMLHa+pyp91eXXsI/kKiBTSRlJmX6paC4gsQd8cr8ZaKX45TviykxXO4k05HzZIJ8UBwZmnf5kt/kyEKNAf6/FMviU2L+7LLjXKTCrfE5nCgrIXKQe8hx0T05vricxCNWhK/FUCT2iuwu10pWR9ZI3oPD4VdBDoI9pJTNBQuVZbkaz7FtrLeW/zCLJ0dHZz9758d57SAJJldX377oj+rLb9LG7w5OecITO7kXisRVuSBqJYKQHjDNuv7SVz7+5KO9F/df+8KvUOn65pf+473j95qV68srd7Y29AbENiECxM2zDMVNLkaMGYn5i7FLsRIRMhPRIbmJCGkxF47L2MWFLSKxnCIzRloLMxQRcWShn3xELvP/y0qkwjylvAEqFYsSvf7lfUin5F25rHC0ktuSS4rpydT4ginB9vnD24xywW1JaUBoBBnPQn8ZKS+4siw5qwNskyZC+hiWlq/SLYx03vvZ/0vR1nMKTn4drmt17Sppq+2UWGwe88AdWRcauOVe1HWYJ8yZ7W1e+/yN669cHD3nNq2VV+Zp4dvf+KfrK5+rVtdaqzdJqrjyAgejOrIeSGSBzHEDCw0V8xeF/6UsRZhyzmL9UKDFJ+STv/xaaK/okLjIxbuX30UxZYpydbnCL1/Lkzn4hWgsJk6MX2g9rlUyRrkM7/K2rIWICfH/comELpAvfjBATuTaotkQAjR4i25K8zRTA9MSIKANhaAhBdFzt+585eDwjOS9w6NDJqHDI14Ky9BRhklBQMsXKitLy6NeW8YjeQeEgDAvkANgPqhGnt5646W3kmhCp8143B8NL3hA+eaVuzQ+CxzkqUikAxcDtmuy+zUUzZQlp3OSIoeQPcwCbygOkbkt5sVbC9mLWGX9ZTYYIAq5+E16hMQeQZKXeQ6fYzKLPFWSHt5axCK+cxmJS+yMlOWQG7AMSJXrEJqwWrwVMhLLQI6LL5QGnRfJyddlwJRQibRlwWSxcHmLYdNcTgiWX0WajAf9lAcLXrn66lKreXV9mf8U4t2ff/9Kk5pdqd68UaGTnIcTu+546l9c7NHzK1VLoR0lVePKi9WVzTFQLbbtPHrwDgOnRy5fWcIDLUYkroHJSNcZ1UqaBVFXepr5pFiabKNbLD2Gefl3MTdEICqw6MfDz4koL7WISfHncq5SApCxiJzkm3zxHX5qITxJVkXiiJnbczLXlNMYNnJbOAsK1ik93QmbutiSwvCoP4h1ywniBURDF5+QG8rfxYoysMsXKOrijos3OFlUWRwEMcqwrt96q98f0fLWbZ8VnYbjVotV6hbydDea3HjsMI8P5vEgizsubscN5Y54NJFIa3n7zmtvnp7srbauLTc2ygW8BGMXpVisvZBmcNEwV+iFqIaUHhgycUqcp6ww2w5FJIybZce4FhQnHxdZYBKAE+I6vo2CALyTeEYxeVIN1Fy0Bt2Re8oaLxRQjBWUhL4gSmGU+QgucWEgvAEvjPNmCjKLhVzkmlyAXAqEv4hfMlH5HMcXXAwKQNsne39oDJChiIvFscr54ltx7QKgYInwjbdf/fVCpbq80igUvN1zleoeD4fAWqVjQ6VfzuLphDxigHZX6WCAqGZi0i5HBYE2cDZn5NbX76UJjwwutJavUHHAW0s0lLgqayvxloGhp7KG+CGoGOgt+oVliwKzynjcAj/lVHFPC9EuRCkLz8fAbLxABFKxkK3kfFFQpRVSfB0hD/3ikAxO/gLvkATuiRq6Y1O247n3eg16tkDpwKBw5PG8MxrUJcSLexFnjjTZwaHSFJaD4ucpnA49DnqOJ7hRsXSEpqWGSDqLDi+69djmI0VTilqIIwklusg2DP5CJxRLy16+iSIU8+5nj95DGSrsvrG0uq1WHWWtuUxXazA8L5KAsuORRm8238r/YbB4wb56Pff5e19u1psfvffvXr52l9FSNnZNymiKs3hgLY8JQBVYg3mPB1Sxl4ZJXwpadIAGWp7PHiEZ3BuZ3MLU6PIX2QkvK71jsHYUL2hFWvSXA3Zp+Ix4aC/1Ls5JxKfR+8E6chugQ7zgs/kvNNiI4dMjqNGVi49zbHaw6Xgu9tuT0ks/HwCZBcCxi65leACqyjz1EypgFkO/siMTCYrusJoL9ZeiALUQnrNja/ylfD+3qIKIcotZoBO8xKpee+M3MbxFj1t0/9Of03bONkDkzoOW+I+FiF1Pnj0QugZPgR9Y2BBDwLyoo/ErxPP62rWzsydsRcUsGZbAgZQ9JPKFzmXs1cBDTSFgYRWkQJ/S/kmRj+1D+K1F950wx5iNIBqe8iUmKZmVdOTSXyGNyox5wXBweTZgUBFBldlWj7jlv2XgWYzQowvH8v/VdGe/cV/XHcA55HCd4S6uki1LXmTFtpzYao2kioMkTRCkDvqQh6J9CII+FMhDWyB9af+GPhRBizZFkz40QVMkaIwAAbIgdjY7jlPLljfttHaS5iZuw51iP987DimRw5nf7/7uPfs595xzwb4lBcw2TuSbzC+pxNibnWtM3V6ZXWrMiP8srd1eojw3a/TLPUUnMhrDKMVii9lPVuhfXjy6VnE2mwfyStRbaf2EeDujisIWcGcjllPf03qvt9rS39Ey4F/7/kBH5dTJ03o/r63rgtR34dwLSZwqWQV49CCtFLuWFu+ILEawJ3ZFBNnUiWC0A6v22Ib20aNPbjWWf3f2F9IybEaACGhKkvCzKjBMEI0qcpK5qJJbszw7RU5kwGKaOSkIsHmggD+7ESnltZUvkQt4C4blNqj8JUP2F/T7UTCrdFwXrFTjquNtltbaq2lV8LysIEf/KRv9wNHWpr5edSlEzC2nVRnZTYbTYvQZyYOgpMBGbSIrBemxY2JCuSKWKqLMDl2RP0iPdCYu3UY2xIct+X72XUItYSO35vbyRyT4vZZTp/94qzG7v7N1Yer2z37y3c99/s89h9ITWkYZV9+7sCbL091UBpnYvNEkOYtmt3fw+OlPv/jTb7/yyk8ef/JZXb/YAlESxXbRCnHPzlZPuyItR8Wo8lQmxd5PuwGJSsKrwA9AKuSF+SxplbHF6T4gNdLxiMlFHhVRiXZiYmlDwPQLJFrTKF+B6noLiZaNEXvh1L+7NRbX+BoduxfzApyFR+9HvzlxpSodeqjWGSnR8IOuJ1BdC4L0WMz0JKmBVclGZzEAclKvfr9yBRZF1gTYEcb++8hXIIzYKxOHZaH2zM4umOmvXvrBRz/+ha7OGomkWb55LS07nMyKy4ZXwUgkedEi7jVUTzphHn/30ps3blw68ciTUARhHgOvbX/zt19lg7l/YVktYosGlLSzlgxKizVkjQFUmg7o6UPGk7D6HIMofwVaVrVML703VE80H8mRERSQzgKthR3CC3iEYNXUGWzWtvXbadEtzQTVg3lzRPJHXIwKOQNectaIHQAWo2hwiHOGVjzPQCRiPS4QDS47jcJFlb83CZIIJbRM4oQBfVQMgKa31wz7MwmQMiGY4E21Q2n82uItF66urPQNjB6970FA2dvePvf6L9R8n3zkI6NDI/g+5hwohvglc/gdLiiYbb186fVqe9fJR582bbiMqGbeLOl5n67f4iuOvTHDe5tse8DmIbRVnc4gx14/UBaDxYjvyV1AsEC/upn0MMwr7dkTtDIPARvTvHYrDRuf6azdukIOlzYEXQyRfe34dcmLqwA26UG+rxVt8qWK1ak/IG4l6UPIBjNcDOsok5h6lCOuyqZNbDoMGC3E8cAxVlJoMQsuZEgFeRk4AIDfBSXe0OvGzakbO/bwmTfeeFHLaAU///u9fzv1xJnO7p66xjs6qHRUL1x4zSEl0RoBKKVGvpZzemiVIj3GJx/G7K+9+rM/ee4vOfrmE3/E9OZXJKxG+oAOduMgNGxiInfWPmorZRyYkx6k2Zv1A6oNQR4w3APnpLcRUxIaFUG4ZUnFMCDhvR/1BdONDT2BWpPWzKaTExKzNPRiycABJsYxge7WjlBhqBElGaiFus0aPC7iwkZfEGLTm9SVJQd9kbkZxJd1gV0gHsaGj5i+5QbvxW4t6wR/CW49wyce/djFt19Ie5PKzre+/U9f+vI/YFknwAz01Wemr8smAiV3uD83eB2utxpP0L93Uvnp1al3r127ePzYY7jINMnhuDRFo+VZ5T7PzZybwUkfYiUDYHKZX21q87GcSAHSYY8UwnEfyRB8kFHZWgo1YD0Y1Y/GgrNG1J0AYkrzDC4doTinMWeSGhlHINhwbd4JVVCvUbroqxRrfOD8GKq4mu5ozUFDSK5M3Nt+B5Je5HXA6nWTUqLbAsSCn3yE9IOUE6c+c+X8y+vri4O99elb595657cnH39msH9kfen996evJT2slf43oPGM4QXQAGkZvaUyed8jAIrx73/gUbuNBFboy8cghDgZo8XaSOWWiVB5sSidOUYmGsdlZWhM18RV8FWeZGbsJ3KV1YlzvWIDNA34IvRsU5cQA3aIp41uQtakW7ks8ekMDFDNxxdLk+1LjYnPamyNLdS74etYbpy44pMw5UsjFDtHbibBuSXIuvhEBKsLA00jEidZCQ7I9T4qiRaejkEdPHbsxJlebf7a7R21P//dr03fvlYfGF/b2FiUuDP1buBS4A8FEc0eE4/SULGpRyePM2kuXToLcFy1vEm4TS9rC3hAg1Oi5a4sLdABFnl1pdwzJnkJYcFAzHfg2N8jQXC6VHx/+w42DBpWC8nZSEE+rvRbOTMyBFb9mfJuKBEqgnt/5EIv8CbImD9aAHKxjQS0vZ+9F58iyWK3YxS3k7ASWUMqmXbQUQYGQm9F4GSY5sYVEzPUH/y7NHIOU7gg97VUjp989sKbL1QqKso2D/a2fvqjbz59+lO64W1o3HH1zeMPPpFNVCxTzBZDR7LngXnQ6NiD2vDdmDq/vHxX6kOmaDtrTSCactTuekvnQWV6plbWGhMmjy0TLr/dEV6hCthJnBPwoo/D0U3wED9wUFKivM+iFPcq3Gsx4NJSqeuUxcNk8RYGBK/yFX4sizQS6RQVH+bx7afBGXkeVt6KOivvBYI+az7aAOZtEr4KCrc2lrscQ5kxMp4fkdCFtBOP8jQogZYgrvOx08+99uv/NqziiJkb777m2Dlqt1p999xLf/SJPxUywqRIJ5xlliYNCHCmrkM4tbd/787tt9/8zTMf+2weZdv8+MRAJJzJmZKLm5O0gCyBfcEPLCBuYgW2VA6Qk+lsHUsAw7nbm0ZomsJRhiQUWoj+ABwUn6WFXjKSZxlWSK2svkwU6pB2FhnGpe8IxlSfIk6AsrWG+HEC9vWkmC8gQacaKdQTsMXKlfOv/5ErFKPH1yOWSXefW4J3cWumQjACBznjNgFFmB+//0Rv76GZ1ZsDg73aC16+cHby8IgktcXZa3empwRSSBvS35JCPAFLyCozk6fm1JzO9htT5x459Qxw5dk9tY6oZF+WEiwHFggQQQSp2V5Wfx3ZLDbEywIGDjc3E86tzixZTkFG7o0e8TB4JE2ceUUsGpDJEHlAsLkjB8vFVWVCuUVwhG8pHigvmiJEGgiSkU4UJ+SVJwAEMMtCBXvwIsJcTBznaJc8lGZVGnKQGQa1hb5HRpTYl4UnXB06aRpgXjdJOYAx5zJbK3nyo59f/uE3teJWPLUux3FmQYq0Pp8zty9PjE92qZgv5BxRE8iYRaZhfkPDY90dHe/f0XXHU6IYqlubjchtd0SzMxn55h2AC5xm4n5hkJ2Wjc72ThNwDWtV3HBvJ030AAljC04LCmASgjfUcU8Vp+4ejOsIM7gt4YMdvTwUqCr31pm6XaPnAy5Zu4dl0DQvBGpKBCKweBBArchEi8ZkpW7rRC06pZNqYe+2apLFA/XtNDVrKiDZtxr0yckvMEUWmJpUI6AiLcG6WSvngrT3TGVBsAH9lZaREVVhj1++8Pry6oaeWo3VTT73yvbu6y//7MlTf0iPuAxJh2rQJSckDjSaTZ22Za6tLEgAUA7hnSp7ksTwwK0tqk0PTAeLzTv0TNPXsZHDmu5qV8oA2EqDjSjtQvWbyEX/EiDGiZ7jCWIChI/Fq7n0E36pVtSd0h2qjGfXqcuo+ieNIhzc7DytGt4WdCrclAUXLzwwTYVPzuWNDNXnlNjV9TpqoKxeyrvxyTjHXHW1dAk1ZiscDxXaQwEK20gqbIEcMyy760Dq/nZUo0Qrp7UmLw/vm2qnmMNEn7KZykOPf3J65tr27jzuofZFxTQcmblz5eb1y0PDE1y5iC0CEAQi36JkY1dg35zosT4/ezNOQSpVxCT0S9DwjHkow0e2esdhBggqG+4bceQtSi2qXYgH6FwMp5ISw7GWYaKoqfBz7JfGRmN2XbubmshojqrU1EBoUlWFhmVbzrxMnABfG79Xz99IM7ZLtd6lTj9GRXtaVKfJXkRUWNI0nNfEGUvEQGGVehn+JsBE4+V8zFprfSAsnamJZokNtvUe9AWT0OEtqyNmwILwssY4YGgsaRnxn/c2Khvr+mCuXX+ndlB5YPLItj6169vOCXKkpFCD+slzZ3/+xS9/xbDcuoVbN25dPt/fN3Dfo08kD48ScYhYZ/v2hkYMd0fHRncaa06s1qtHD+8dBNLBe2gZ73DkD8WCCLV+JiPvaYsROUg+6XMm8FbkZwIoev+QeKCDg5ric3B4uNbncFSfanK77cinxLRS2eGcEXXk0mA/8CUBKFoBESWshyr1WSy2VmIwFK4CJb0XdjsYBlrZKjM1kagmifqqKDlgDJJAES65j4iXyVLMTdNM3IiSCkKS9EN08/HhRlWZqbEULGtHp+aD/baFxtIPv/UvWh8vLS5oRaOWRUk7bqZqGlu7TmaZn55anZ1q0a/pYP/8/702ffs2e7Fnf6HebyNqcPvuzKIk+8W1yvyVKzffOPOJT1e+8+KPGw2lIv0IMdLH+iJ9glT5EpbKs7V2akpWdle9NxpZcNQeFMXCg9QQtS1JsdYbOWUurFRhfMHdjq50rckhYfqSoIhc0aUzb+rzDqSy0rHkNACjRpIa4UcCtopy5QhjGomvi8NAh/Hb3abpl69Etw1Y7OZYo5L2PF3sJoItp73x3JvOjAqgkqwZ4yuSCsUQo9ZYsGi+pCJjNr6LU1+Wl+cW5m6uri698vLZrU2bFGrkc1Ip2pb+eeYjp/TJ3HZ83n5FJ+aHHhifWVzf3dn4/i/PTt2cEd78+6/8xZ994Yvd9QGc09rhDLaIWxuhIiF7+mqtN3QD6dQEvt47lLpaUwgpRXRQxntVFTMd8WOgeksQhfQEK+Ssk3naOAG9aVuZzQ4sYcObnRAJGKqPrCuCOC/QfkFDGNszdCHDm6wDHVBcU93vBKQCgRxM4xVvpbuldO8yuitQY9wvRhY+zl8IAsWDbfmXaK13IrUYHbIsqZFcE/OBwk5IskuAX7GY5rnHKk98lK1zdPLX3/zPf8eZSCNa1yL2d3788m8PDw88eOS+1UajPnCos3ds4F7HXmV84e4vMAFqGBseWXp/xmn3VFP3B7oVn6oezunw21VKWyO07c2ldQWnlqq0m98VsxAt0HihyjZV6Ta06x09XcCpGiVLD8wzlaCgpYKefcVswpqQXtRKtoCLbjVgmlJjTKqb1At3AnIIzqPAS02UQWJuMFZckHHLliEJFH8rxmzoz39oCOyDHkeqY09p1e7wL1aoSYXWKIAYE14SyzZLXB+pmkNvPcHDk3rx9Mmnnx8cml/UYEgjIFXHvTXdCbfTI3V5c/eJEx+yH0gd9w5P/OO//of+VyifEnvqzOe21+6mFVa1r6ds0d3T2xYREjzd92p9AxrgYq99V9iwE+kgxcklfj32to74tVpob29Uqo1662B9QLGqyH8GKCCyyjCLRVoUFJZWimgj2/xZvFrK0JJLcg84RMoUD8/wwBYg+cq+gBHcFps0//wV0o8/SkCCcEgccCMnAci1BdBIj+b2MgaoGUBRbCsR444u1JA9bcWpJBNRFljGicg0DIVIJkfG5hcXLcTxJsWJqPTXa2vr61evXa71tH3yk5878fCJv/rrv3v38pReQY5I0E/z69/4unbnsakIyNZq115bojbBexhCN5LNhcXFCL4iDenfEJol2OTZ0mtPNQnBIJeiq2942Ka2+9j8KBRTuzRXFsABFihlHTF6kCAyjarwLOAI1YQD85Un5/lWFPeFPRrAI1BwMeAHcEs8LXEqQ7D4yI/wOuL2eSx4OGyuIPKGu4ETfEAQhXA9MlZsyin5VZKPAkB7PESBBm8ZDOgNBHtPfeT0xan3GL8NnGVHo97rp3q/8UODwogv/fxHb73+OxjSV12XCPH27s6D+cUFtls8VnxOFdj6wMi7Nj1zFOk9ujy+YgxsEOBBRoAhEFTc2Suhl23aQ8wVUV9mBoShPpAS9k2KXugnNNeiW6ypsmHNlTYL1LI2AiO2A0hSLGHw8iJcSMgKy6Lh4m6ApGUbxy8/QRivICaTMTNC3JvEOgBTIG5C8QAX1dTcQ2BpAX8laeIkApNs15EOQSwLo2DQxLN/kXCj3QmuArWjGTxPibKyhUMk3p6e7e+rO1aCgewEurm5uZ6d7c+c+fCzf/DYO1evX7w+ff3mzAu/euXhhx545MHj1fWVRZ3s6CnE6BddphWXIIreT9ohAEwRazobdcK2Njr9aErGj4MCwmTIA8VZe2jHcQJ+ojp/RjCCY7haISmDzd36p6CD2D+ID5jc7mNoBXkgAM1oAGzD6wwY8zEvNTKwuJuuD7UW4HqohxtVVNYloUzRJyQJRWVCAa93WveoXZpWLKR1V0NH0AVXEqB8hSWCKigj2bhj9hFfeOmX//P8d/1pShoCUP8KImG9XuNJtwz2W0vb4trqQ32HkcGjGmpMDt88PvH21Zu2vlbuzldlSTvOTalrHGRayUFhrS1r6049Eg9u124BhHr6eg8dHgMLLN1VqyVg19nOxTRRc4l76OFWq+tQSkkL/QBhgh0gm1Bu5H2hJkSKFoxjKUFIQBCc+dwbBZAAFEz5Bus4wc03YkgEv0SKZ0a3cFmlnwCIu8s8PLnAnG2BJ4ggQ7e32Bgr/R0jhAEPRkVtTCK854y5jSC4xSESm3eX13/3xm+/9/x3LA2+uMOO5unv7UZrVri1ue9Mga6FBTpqY3OTC6W7mSJc3Tp7a+1PHD88MTE2MthfHT12xM6UWXKTDM3bLu55zgpjM7LT0LkldHTkjHTrCXuYSpLKAher9G1vmWww2UJoASmIBYpoJzZ/wql2rxNoAQjcTQ6AA8hkleQaLi43hP18RWgCTcDn6IQ4uAQfIUI1G1smFw0eYnOgOgHADnGNSYG8jwPwwBfEo2bNIvPxRQ4AtIwSZGITpplEwUwsAV7TGBqo3b2rbGEVvyd7znnjmHLu7shQHY1ML9x1TWN7e2zQuVf6Q1PPdA3SqvK2Xnvzwt7r5w9Pjla7euuVWj3YjzFjtsSJ3Xp5CUwo1NkJDmyBTVMneNiYVp8Fo1ccRubofa4HUtplmTpBlq17nJ2wlAvgwCuwEVhiwACvU2x0SwqZFKs0dgWTAFWChPgz8i8UC1vAoElhB2MjtibTV/ShwDpS0U0xY1n4pG2ENiBGKMfsshrBC83bg5OkIEipSGYT1kAzOCvIUf5iJbrqbWysawmi1cX2Qcv9J55p7/xxVHEuDVbY13feXz8yoZvllgkHC84RB4Vqq+ZjPd3tY0P9l6eu9w/0siLtaGoztG7drHcwQjMohWfCW6ataFQY5nvTdeihhPgjjFJZSWjaIWnOPc2uN6MTcJQj9yRfU55ZC+ikN4QloUfmbzEGAS+Xmm65ARCzOQUJ0qjcLtsO+0voLKLAysuGuzJ6Q0a2ug5UC8xgrNCd8QrO3BEhHtqM2A2qYj5rFaXvHuMx+tZWxW7DOQlpbKYj1s7mfr2l2q31mp7J2Ivt8ugjj51941WwFIyQU2N3h48zO7fiaLSBwR7ya2l1hWmqW51PYefOzPzR+4/U6n03ZmaXVxadh8awpwkwhlZGroiVlw1F76UxuGJjITLREFPVlBTP4eskKMjnyDJA8eCgFsupDQ7zZ9G/UcNJ73LW7y6TEEeysQJ09xTFkiZvB3vUFCoGCa8RdyJDAU9BbVKmEAJwm0VTmyTY435sFFeMiDGBsDhMkKdwnn2jXelt25vrm/uNzVValnBmbKIs5y5Oz82TVjpPcwM1PjC85h8SPQlh9AU/c4uzR+47OjV1PkEpgon3WagSsTlOz1P4fJkrWnKavIqwtXVzedjJYrXOk8fujy3x4sx5zCVZF8+aLTuKYWLWYeYEmrWxJeAxjirNSldrKqosH5GCGB5L4Nz9WZfAM+rmhCSaiQKhCYEymyk30tU1XrPAU2kWNVJAk9BfVEWJXuMN9Wc+i6kK9lDrL9BUlAYZSC6QLTsoeWRG0LhSAjzDIDkOri6RyDwr+Pd9UF1dmb/x3vW3Ll5a3nAw4dDo6BEHnCER7opQC8vRcgh5qTfv3bjy/R/8l4BW9d7aZ549zdr+9SsXX33rSrEYK9m7qbQ6ytaJC5o3pj61tXLf+Mjk2CGhqaGhESblwtJS5Zdzl9AFusoSsxBzzu9QrS9qlMmWAHmkHphmFfn2z3ptPiZExO8ELJwLpnb3IkRTyRsTGqQJHAvE8mYgzIHI2ckkOoh5CHR4GMqNNITRAghXRmf55sPYow5358iCcECu340Qq4LhBgUlMNeGwIHRMj6gXZ3G1t6/IxS0ut3YtM/V1aNbWeIJpupxaSCu9WJXDs5WrcH89uby6tLXvvHPV2/e0pvNJD/+4Q959Kvnrrx1cUZHjec++4lr125tiMcfHBweHyBnDw3UhG/6evvGD43rqz08NDDQ19f2pa9+hbI2dYzspy9TRn3aD4Ma8vETG7FTZVtCrJWE3VGdueCZsrlkdN69szcAvocXld1QtoF2YDzmkCQtLAZOTgNZ3KgE+5qOTVgXt2YsNk4ILMHACA6rdw0qivAoF9s+Cd0Suiahl6jJABJ2kQuQEn1UDPFmOzc/vTA3ZzJk1vDgkcmJY3IQtRKOeRd7mWUgZTmxAp0RbFir+Nxw9u22UypWFxfnllcbR49O1uv1vr7Ojz/12Ehfu75HK2srIbGcH9vhiD8WpuNonMVZr/XqeA+sBI2IWiaBXkw5GxLkGamSKWZFjk5BtUATA6UAOzRjJZRNSJWAlgebcl799WwKEREIzbpsfQqkewuM2NutDHDeZzqG7yDAwrPESFwZIPMkk8hcI5ei+iNSSyDWFEwA3TIMoBuwsH3+jD+GAPa03WBomIonRfXTJHubGyurM7dvX5q6UauNT04c7e7pBXfNCldWNhalSe44TIcntgppGnuODvSPOjPw0KBABZn7qWeeunL5nbtrW+9dW7413XBmV0f71AOjfR9+7OFbMws37syIl8rFlOM8N78yMTowMda+vLZW7+mxYWyt4719/w87PXoSq+E73gAAAABJRU5ErkJggg==)

  # 

  Tropical Beach Vacation

  # 

  Enjoy 7 nights and 8 days at a luxury beach resort in Bali. Including flights and stays
* ![Image. Mountain Adventure.](data:image/png;base64,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)

  # 

  Mountain Adventure

  # 

  Embark on a 5-day guided trek in the Swiss Alps. Package includes flights and stays
* ![Image. City Break.](data:image/png;base64,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)

  # 

  City Break

  # 

  Explore the sights and sounds of New York City with our 4 nights and 5 days package
* ![Image. Historical Tour.](data:image/png;base64,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)

  # 

  Historical Tour

  # 

  Take a 7-day historical tour of Rome, Italy. Package includes flights and stays

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

For the `data-source` field, you can declare it dynamically or statically.

### Static example

This static example hardcodes the respective `id`’s and `title`’s for the `data-source` field.

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {},

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "text\_input\_form",

"children": [

{

"type": "RadioButtonsGroup",

"name": "radiobuttonsgroup",

"label": "Radio Buttons Group example",

"required": true,

"data-source": [

{

"id": "RadioButton 1",

"title": "RadioButton 1"

},

{

"id": "RadioButton 2",

"title": "RadioButton 2"

},

{

"id": "RadioButton 3",

"title": "RadioButton 3"

}

]

},

{

"type": "Footer",

"label": "Continue",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# 

Radio Buttons Group example

* # 

  RadioButton 1
* # 

  RadioButton 2
* # 

  RadioButton 3

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Dynamic example

In this dynamic example, you can see that `data-source` references the `experience_level_options` of type `array` defined before it using `data.experience_level_options`. When defining such a structure, you need to specify `items` in the `array`, which will be of type `object`. Then inside the `items` object, you have a `properties` dictionary with `id` and `title` just like in the static declaration. Both `id` and `title` will always be of type `String`. Within the `experience_level_options` array you must define concrete examples in the `__example__` field.

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"data": {

"experience\_level\_heading": {

"type": "string",

"\_\_example\_\_": "How experienced are you with weight training?"

},

"experience\_level\_options": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "beginner",

"title": "Beginner"

},

{

"id": "intermediate",

"title": "Intermediate"

},

{

"id": "expert",

"title": "Expert"

}

]

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# Demo Screen

Demo Screen

# 

How experienced are you with weight training?

* # 

  Beginner
* # 

  Intermediate
* # 

  Expert

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Label Content  Title  Description  Metadata  Min # of options  Max # of options  Image | 30 Characters  30 Characters  300 Characters  20 Characters  1  20  **Flow JSON versions before 6.0:**  300KB **Flow JSON versions after 6.0:**  100KB |

## Footer

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “Footer” |
| `label _string_` **(required)** | Dynamic “${data.label}” |
| `left-caption _string_` | Dynamic “${data.left\_caption}”  Can set left-caption **and** right-caption **or** only center-caption, but not all 3 at once |
| `center-caption _string_` | Dynamic “${data.center\_caption}”  Can set center-caption **or** left-caption **and** right-caption, but not all 3 at once |
| `right-caption _string_` | Dynamic “${data.right\_caption}”  Can set right-caption **and** left-caption **or** only center-caption, but not all 3 at once |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}” |
| `on-click-action _action_` **(required)** | Action |

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "text\_input\_form",

"children": [

{

"type": "Footer",

"label": "This is a footer",

"left-caption": "This is a left caption",

"right-caption": "This is a right caption",

"on-click-action": {

"name": "navigate",

"next": {

"type": "screen",

"name": "NEXT\_SCREEN"

},

"payload": {}

}

}

]

}

]

}

},

{

"id": "NEXT\_SCREEN",

"title": "Next Screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

DEMO\_SCREEN

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

This is a left caption

This is a right caption

# 

This is a footer

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Label Max Character Limit  Captions Max Character Limit | 35  15 |

## OptIn

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “OptIn” |
| `label _string_` **(required)** | Dynamic “${data.label}” |
| `required _boolean_` | Dynamic “${data.is\_required}” |
| `name _string_` **(required)** |  |
| `on-click-action _action_` | Action that is executed on clicking “Read more”.  “Read more” is only visible when an on-click-action is specified.  Allowed values are `data_exchange` and `navigate`. From Flow JSON version 6.0 and later, allowed values are `data_exchange`, `navigate` and `open_url`. |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `init-value _boolean_` | Dynamic “${data.init-value}”   Only available when component is outside Form component  Optional Form * Supported starting with Flow JSON version 4.0 |

### Example

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "text\_input\_form",

"children": [

{

"type": "OptIn",

"name": "OptIn",

"label": "This is an OptIn",

"required": true,

"on-click-action": {

"name": "navigate",

"next": {

"type": "screen",

"name": "NEXT\_SCREEN"

},

"payload": {}

}

}

]

}

]

}

},

{

"id": "NEXT\_SCREEN",

"title": "Next Screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

DEMO\_SCREEN

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# 

This is an OptIn Read more [Read more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Content Max Character Limit  Max number of Opt-Ins Per Screen | 120  5 |

## Dropdown

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “Dropdown” |
| `label _string_` **(required)** |  |
| `data-source _array_` **(required)** | Dynamic “${data.data\_source}”  **Flow JSON versions before 5.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean>*  **Flow JSON versions after 5.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean, image: Base64 of an image, alt-text: string, color: 6-digit hex color string >*  **Flow JSON versions after 6.0:** * *Array< id: String, title: String, description: String, metadata: String, enabled: Boolean, image: Base64 of an image, alt-text: string, color: 6-digit hex color string, on-select-action: {name: 'update\_data', payload: {...}}, on-unselect-action: {name: 'update\_data', payload: {...}} >* |
| `required _boolean_` |  |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}” |
| `required _boolean_` | Dynamic “${data.is\_required}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `on-select-action _action_` | `data_exchange` and `update_data` are supported.  **update\_data** * Supported starting with Flow JSON version 6.0 |
| `init-value _string_` | Dynamic “${data.init-value}”   Only available when component is outside Form component |
| `error-message _string_` | Dynamic “${data.error-message}”   Only available when component is outside Form component |

Images in WebP format are not supported on iOS versions prior to iOS 14.

### Example

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"DEMO\_SCREEN": []

},

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"data": {

"all\_burgers": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

},

"description": {

"type": "string"

},

"metadata": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "1",

"title": "Beef burger",

"description": "Beef, red onion relish, lettuce",

"metadata": "$9.99"

},

{

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

# Demo screen

Demo screen

# Burgers

Burgers

#

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "TRAVEL\_PACKAGES",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Dropdown",

"name": "packages",

"required": true,

"data-source": [

{

"id": "1",

"title": "Life Insurance",

"description": "Get comprehensive life insurance plans tailored to your needs.",

"metadata": "Annual Fee: $50",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "2",

"title": "Health Insurance",

"description": "Explore our health insurance options for you and your family.",

"metadata": "Annual Fee: $30",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

},

{

"id": "3",

"title": "Home Insurance",

"description": "Protect your home with our reliable home insurance plans",

"metadata": "Annual Fee: $40",

"image": "iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABwoAMABAAAAAEAAABwAAAAAMxff68AAAIyaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTEyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogIC…

}

],

"label": "Insurance options"

},

{

"type": "Footer",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Travel Packages

Travel Packages

# Insurance options

Insurance options

#

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Label  Title  Min dropdown options  Max dropdown options  Description  Metadata  Image | 20 characters  30 characters  1  200 if no images are present in the `data-source`, 100 otherwise  300 characters  20 characters  **Flow JSON versions before 6.0:**  300KB **Flow JSON versions after 6.0:**  100KB |

For the `data-source` field, you can declare it dynamically or statically.

### Static example

This static example hardcodes the respective `id`’s and `title`’s for the `data-source` field.

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "text\_input\_form",

"children": [

{

"type": "Dropdown",

"label": "Dropdown",

"name": "Dropdown",

"data-source": [

{

"id": "Dropdown Option 1",

"title": "Dropdown Option 1"

},

{

"id": "Dropdown Option 2",

"title": "Dropdown Option 2"

},

{

"id": "Dropdown Option 3",

"title": "Dropdown Option 3"

}

]

},

{

"type": "Footer",

"label": "Continue",

"on-click-action": {

"name": "complete",

"payload": {}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# Dropdown

Dropdown

# Dropdown

(optional)

#

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Dynamic example

In this dynamic example, you can see that `data-source` references the `experience_level_options` of type `array` defined before it using `experience_level_options`. When defining such a structure, you need to specify `items` in the `array`, which will be of type `object`. Then inside the `items` object, you have a `properties` dictionary with `id` and `title` just like in the static declaration. Both `id` and `title` will always be of type `String`. Within the `experience_level_options` array you must define concrete examples in the `__example__` field.

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"terminal": true,

"data": {

"experience\_level\_heading": {

"type": "string",

"\_\_example\_\_": "How experienced are you with weight training?"

},

"experience\_level\_options": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "1",

"title": "Beginner"

},

{

"id": "2",

"title": "Intermediate"

},

{

"id": "3",

"title": "Advanced"

}

]

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

# Demo Screen

Demo Screen

# How experienced are you with weight training?

# Dropdown label

Dropdown label

# Dropdown label

(optional)

#

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Embedded Link

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “EmbeddedLink” |
| `text _string_` **(required)** | Dynamic “${data.text}” |
| `on-click-action _action_` **(required)** | Action  Allowed values are `data_exchange` and `navigate`. From Flow JSON version 6.0 and later, allowed values are `data_exchange`, `navigate` and `open_url`. |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo Screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "EmbeddedLink",

"text": "This is an embedded link",

"on-click-action": {

"name": "navigate",

"next": {

"type": "screen",

"name": "FINISH"

},

"payload": {

"test\_payload": "This is a test\_payload"

}

}

}

]

}

},

{

"id": "FINISH",

"data": {

"test\_payload": {

"type": "string",

"\_\_example\_\_": "CTA title"

}

},

"title": "Final screen",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

DEMO\_SCREEN

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo Screen

Demo Screen

[This is an embedded link](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Character limit | 25 |
| Case | No restriction on formatting |
| Max Number of Embedded Links Per Screen | 2 |
| Text | Empty or Blank value is not accepted |

## DatePicker

The DatePicker component allows users to input dates through an intuitive date selection interface.

Before Flow JSON version 5.0, the DatePicker doesn’t support scenarios where the business and the end user are in different
time zones. Only use the component if you plan to send your Flows to users in a specific
time zone. For details, please refer to section
[Guidelines for Usage](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#datepicker-guidelines)  
  
Starting from Flow JSON version 5.0, the DatePicker has been updated to use a formatted date string in the format “YYYY-MM-DD”, such as “2024-10-21”,
for setting and retrieving date values. This update makes the date values of the date picker unrelated to time zones, allowing businesses to send messages and collect dates from users in any time zone.

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “DatePicker” |
| `label _string_` **(required)** | Dynamic “${data.label}” |
| `min-date` *String (timestamp in milliseconds)* | Dynamic “${data.min\_date}”. Please refer to section [Guidelines for Usage](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#datepicker-guidelines) |
| `max-date` *String (timestamp in milliseconds)* | Dynamic “${data.max\_date}”. Please refer to section [Guidelines for Usage](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#datepicker-guidelines) |
| `name _string_` **(required)** |  |
| `unavailable-dates` *Array < timestamp in milliseconds: String >* | Dynamic “${data.unavailable\_dates}”. Please refer to section [Guidelines for Usage](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#datepicker-guidelines) |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `helper-text _string_` | Dynamic “${data.helper\_text}” |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}”   Default: True |
| `on-select-action _action_` | Only `data_exchange` is supported. |
| `init-value _string_` | Dynamic “${data.init-value}”   Only available when component is outside Form component  Optional Form * Supported starting with Flow JSON version 4.0 |
| `error-message _string_` | Dynamic “${data.error-message}”   Only available when component is outside Form component  Optional Form * Supported starting with Flow JSON version 4.0 |

The payload sent to a data channel business endpoint is a string that shows the timestamp in milliseconds.

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {},

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "DatePicker",

"name": "date",

"label": "Date",

"min-date": "2024-10-21",

"max-date": "2024-11-12",

"unavailable-dates": [

"2024-10-28",

"2024-11-01"

],

"on-select-action": {

"name": "data\_exchange",

"payload": {

"date": "${form.date}"

}

}

},

{

"type": "Footer",

"label": "Continue",

"on-click-action": {

"name": "data\_exchange",

"payload": {}

}

}

]

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

# Date

Date

# (optional)

(optional)

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Guidelines for Usage

### Before flow JSON version 5.0

Due to current system limitations, the DatePicker functions correctly and as intended(that is, correct selection range is shown to the User, and accurate user-selection value is returned to the Business) as long as

* The guidelines in this section are followed
* Both the business sending the Flow and its end-users are in the same time zone.

Correct behavior is not guaranteed if businesses and end-users are in different time zones. For example, if a business operating in Sao Paulo (UTC-3) sends a Flow to a user in Manaus (UTC-4), the DatePicker does not work as expected. Do not use it if your users are in different time zones than you.

#### Handling of dates for businesses and users in the same time zone

DatePicker allows setting of date range for user selection through `min-dates` and `max-dates` fields, and also prevents selection of specific dates using the `unavailable-dates` field. If you have not supplied the date range, then by default, the component allows the user to select dates from `1 January 1900` to `31 December 2100`.

**Setting Date Parameters in the Component**

When you specify the date range or set unavailable dates, you should convert your local dates with midnight (00:00:00) as a base time to UTC timestamps.

For example, if you are a business based in India who wants to collect a date in the range `21 March 2024` to `25 March 2024`, then you should set `min-dates` and `max-dates` as `1710958020000` and `1711303620000`, respectively.

`21 March 2024, 00:00:00.000 IST` converts to `20 March 2024, 18:30:00.000 UTC` which is represented by timestamp `1710958020000`.

`25 March 2024, 00:00:00.000 IST` converts to `24 March 2024, 18:30:00.000 UTC` which is represented by timestamp `1711303620000`.

**Component Integration**

DatePicker will read the timestamps in `min-dates`, `max-dates` and `unavailable-dates` fields and convert it to the end user’s local date for displaying on the UI. In the previous example, a user in India will see dates from `21 March 2024` to `25 March 2024` in the DatePicker component.

**Processing User Selection**

Businesses will receive a UTC timestamp, which should be converted back to the business’s local time zone. Importantly, businesses should focus solely on the date portion of the resulting timestamp, disregarding the time portion. Focusing on the date portion ensures that the date remains consistent with the user’s selection. Unfortunately, this conversion will only work correctly when the business and user are in the same time zone.

For example, if you receive a timestamp `1711013400000` then convert it to your local timezone and extract the date. If you are in IST, the timestamp will convert to `21 March 2024 15:00 IST`, and you should treat `21st March 2024` as the user selected date.

#### Recommendation for navigating Time Zone differences

If you need to send flow messages to users in time zones different from yours despite reviewing the above guidelines, follow these steps to overcome the limitation:

* If you are a business based in Brazil and want to serve flows to your users across the country, then your time zone range will be `UTC-2 (Fernando de Noronha)` to `UTC-5 (Rio Branco)`.
* Add a `Dropdown` component within your Flow that allows users to select their current time zone.
* Identify the westernmost time zone from your time zone range. In our example, it is `UTC-5`.
* Provide the dates you want to collect in the westernmost time zone, using midnight as the reference time. For example, if you want to collect dates from `March 20th, 2024` to `March 25th, 2024`, then provide the timestamp in milliseconds for `March 20th, 2024 at 5 AM UTC` and `March 25th, 2024 at 5 AM UTC`.
* Convert the timestamps received from the user to their respective time zone and use the corresponding date. For example, if a user is in Sao Paulo(UTC-3) and you receive a timestamp of `1710910800000`, then convert it to `UTC-3` to get `March 20th, 2024`.

### Start from flow JSON version 5.0

DatePicker component has been updated to use a formatted date string in the format “YYYY-MM-DD”, such as “2024-10-21”, for setting and retrieving date values. This update makes the date values of the date picker unrelated to time zones, allowing businesses to send messages and collect dates from users in any time zone in a consistent manner.

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Label Max Length | 40 characters |
| Helper Text Max Length | 80 characters |
| Error Message Max Length | 80 characters |

## CalendarPicker

Supported starting with Flow JSON version 6.1

The CalendarPicker component allows users to select a single date or a range of dates from a full calendar interface.

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “CalendarPicker” |
| `name _string_` **(required)** |  |
| `title _string_` | Dynamic “${data.title}”   Only available when ‘mode’ is set to ‘range’ |
| `description _string_` | Dynamic “${data.description}”   Only available when ‘mode’ is set to ‘range’ |
| `label _string_` **(required)** | Dynamic “${data.label}”   When ‘mode’ is set to ‘range’ the value should be in ‘{“start-date”: String, “end-date”: String}’ format |
| `helper-text _string_` | Dynamic “${data.helper\_text}”   When ‘mode’ is set to ‘range’ the value should be in ‘{“start-date”: String, “end-date”: String}’ format |
| `required _boolean_` | Dynamic “${data.is\_required}”   Default: False   When ‘mode’ is set to ‘range’ the value should be in ‘{“start-date”: Boolean, “end-date”: Boolean}’ format |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}”   Default: True |
| `mode _enum_` | {“single”, “range”}   Dynamic “${data.mode}”   Default: “single”   Allows to select one date in ‘single’ mode or start and end dates in ‘range’ mode |
| `min-date _string_` | Dynamic “${data.min\_date}”   Formatted date string in the format “YYYY-MM-DD”   Disallows selecting dates before specified min-date |
| `max-date _string_` | Dynamic “${data.max\_date}”   Formatted date string in the format “YYYY-MM-DD”   Disallows selecting dates after specified max-date |
| `unavailable-dates _array<string>` | Dynamic “${data.unavailable\_dates}”   Formatted date strings in the format “YYYY-MM-DD”   Disallows selecting specific dates, should be in the range between min-date and max-date if specified |
| `include-days` *Array<enum>* | {“Mon”, “Tue”, “Wed”, “Thu”, “Fri”, “Sat”, “Sun”}   Dynamic “${data.include\_days}”   Default: all weekdays - [“Mon”, “Tue”, “Wed”, “Thu”, “Fri”, “Sat”, “Sun”]   Enables specific weekdays, for example to enable only working days Monday through Friday and disallow selecting Saturdays and Sundays |
| `min-days _int_` | Dynamic “${data.min\_days}”   Available only in ‘range’ mode to set the minimum number of days between start and end dates |
| `max-days _int_` | Dynamic “${data.max\_days}”   Available only in ‘range’ mode to set the maximum number of days between start and end dates |
| `on-select-action _action_` | Only ‘data\_exchange’ is supported.   Payload that is sent to a data channel business endpoint is a string in “YYYY-MM-DD” format for ‘single’ mode or dictionary in {“start-date”:”YYYY-MM-DD”,”end-date”:”YYYY-MM-DD”} format for ‘range’ mode |
| `init-value _string_` | Dynamic “${data.init-value}”   When ‘mode’ is set to ‘range’ the value should be in ‘{“start-date”: String, “end-date”: String}’ format   Only available when component is outside Form component |
| `error-message _string_` | Dynamic “${data.error-message}”   When ‘mode’ is set to ‘range’ the value should be in ‘{“start-date”: String, “end-date”: String}’ format   Only available when component is outside Form component |

### Examples

#### CalendarPicker single mode example

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {},

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "CalendarPicker",

"name": "calendar",

"label": "Single date",

"helper-text": "Select a date",

"required": true,

"mode": "single",

"min-date": "2024-10-21",

"max-date": "2025-12-12",

"unavailable-dates": [

"2024-11-28",

"2024-11-01"

],

"include-days": [

"Mon",

"Tue",

"Wed",

"Thu",

"Fri"

],

"init-value": "2024-10-23",

"on-select-action": {

"name": "data\_exchange",

"payload": {

"calendar": "${form.calendar}"

}

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

# Demo screen

Demo screen

# Single date

Single date

# Select a date

Select a date

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

#### CalendarPicker range mode example

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {},

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "CalendarPicker",

"name": "calendar\_range",

"title": "Range calendar",

"description": "Use this to select a date range",

"label": {

"start-date": "Start date",

"end-date": "End date"

},

"helper-text": {

"start-date": "Select from date",

"end-date": "Select to date"

},

"required": {

"start-date": true,

"end-date": false

},

"mode": "range",

"min-date": "2024-10-21",

"max-date": "2025-12-12",

"unavailable-dates": [

"2024-11-28",

"2024-11-01"

],

"include-days": [

"Mon",

"Tue",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

# Demo screen

Demo screen

# 

Range calendar

# 

Use this to select a date range

# Start date

Start date

# Select from date

Select from date

# End date

End date

# (optional)

(optional)

# Select to date

Select to date

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Title Max Length | 80 characters |
| Description Max Length | 300 characters |
| Label Max Length | 40 characters |
| Helper Text Max Length | 80 characters |
| Error Message Max Length | 80 characters |

## Image

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “Image” |
| `src _string_` **(required)** | Base64 of an image.   Dynamic “${data.src}” |
| `width _int_` | Dynamic “${data.width}” |
| `height _int_` | Dynamic “${data.height}” |
| `scale-type _string_` | `cover` or `contain`  Default value: `contain` |
| `aspect-ratio` *Number* | Default value: 1   Dynamic “${data.aspect\_ratio}” |
| `alt-text _string_` | Alternative Text is for the accessibility feature, for example Talkback and Voice over   Dynamic “${data.alt\_text}” |

### Image scale types

| Scale Type | Description |
| --- | --- |
| `cover` | Image is clipped to fit the image container.  If there is no height value (which is the default), the image will be displayed to its full width with its original aspect ratio.  If the height value is set, the image is cropped within the fixed height. Depending on the image whether it is portrait or landscape, image is clipped vertically or horizontally. |
| `contain` | Image is contained within the image container with the original aspect ratio.  If there is no height value (which is the default), the image will be displayed to its full width with its original aspect ratio.  If the height value is set, the image is contained in the image container with the fixed height and the original aspect ratio.  Developers should consider setting a specific height, width, and aspect ratio for images whenever using `contain`. On Android devices WhatsApp sets a default height value of 400, which may create some unwanted spacing. |

### Example

Flow JSON

{

"version": "7.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"title": "Demo",

"terminal": true,

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Image",

"src": "iVBORw0KGgoAAAANSUhEUgAAAdcAAAHYCAMAAAAoDFImAAACr1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD39/fq6ur8/Pzx8fH09PTw8PDw8PDR0dGcnJz5+fne3t68vLxmZmbt7e16enre3t7Hx8dERESsrKy6urqvr6+3t7fz8/Pg4OBnZ2f4+PjS0tKGhoZAQEDj4+OxsbHl5eXp6enDw8PY2Nijo6Pv7+/Y2NjZ2dnHx8fT09Pu7u7+/v7Dw8OIiIjk5OTk5OR0dHT8/PyUlJRMTEz6+vrn5+f39/fX19ft7e35+fn7+/v5+fn////6+vr8/PxHx1ZBxFI+wlAst0FAw1FIyFgvuURMy1tRzV5UzmFKyVlExVRSzl88wU4qtkBFxVVQzF0wukUuuENW0GI6wExOylxLyloqtT81vUk+wU8suEI6vkw1vEhDxVNTzWAzukdY0mRX0WM5v0sotT5Z0mU4vUs3vkoyu0bz+/QyukZMyVpOzFwntD0ptj80vEc3vUonsz1Z0WUwuERGxVU8v01Z0GQmsj1Kx1k+v09Qyl1NyVtWzmJIxVc0u0hZz2RBw1I/wVAwtkRJx1hRzF4psz5DwlMlsTtExFQ5u0tBwVEyuEZXzmNSzF87vk00uEcwtUMvtkMstkJGw1U2ukk9vk43vEoytkZU0GFAv1BOyVxVzWE8u002uEkutEMvs0Pa8t2Q15tLwFzm9+i257zu9u/N7dLh8uSd3Ka/6sRSw2JbxWtiyHCr5bKC0o6C2Yt+0orJ7c5Fv1ZAu1Pe9eCl4a1rzXdoyXbF6Mu76cGx5LjR8NVz1H6s37R51oNezWuJ2ZJVyGOE1ZBwzXxt03dYy2XT7deg4KeY2qJ1zYNi0G4vs0K45L/V8dh5z4WO3Jbo+OrD68iV352L1Zbp+Oub36PcVIkAAAAA…

"width": 200,

"height": 200

},

{

"type": "Footer",

"label": "Continue",

"on-click-action": {

"name": "complete",

"payload": {}

}

}

]

}

}

]

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo

Demo

![](data:image/png;base64,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)

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Max number of images per screen  Recommended image size  Total data channel payload size  Supported images formats | 3  Up to 300kb  1 Mb  JPEG PNG |

## If

Supported starting with Flow JSON version 4.0

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “If” |
| `condition _string_` **(required)** | Boolean expression, it allows both dynamic and static data. Check section below for more info. |
| `then` **(required)** *Array of Components* | The components that will be rendered when `condition` is `true`. Allowed components: “TextHeading”, “TextSubheading”, “TextBody”, “TextCaption”, “CheckboxGroup”, “DatePicker”, “Dropdown”, “EmbeddedLink”, “Footer”, “Image”, “OptIn”, “RadioButtonsGroup”, “Switch”, “TextArea”, “TextInput” and “If”\*. It is allowed to nest up to 3 “If” components.  From V7.1 ChipsSelector is also allowed together with all the previous listed components. |
| `else` *Array of Components* | The components that will be rendered when `condition` is `false`. Allowed components: “TextHeading”, “TextSubheading”, “TextBody”, “TextCaption”, “CheckboxGroup”, “DatePicker”, “Dropdown”, “EmbeddedLink”, “Footer”, “Image”, “OptIn”, “RadioButtonsGroup”, “Switch”, “TextArea”, “TextInput” and “If”\*. It is allowed to nest up to 3 “If” components.  From V7.1 ChipsSelector is also allowed together with all the previous listed components. |

### Supported operators

| Operator | Symbol | Types allowed | Description and examples |
| --- | --- | --- | --- |
| `Parentheses` | `()` | `boolean` `number` `string` | Parentheses define the precedence of operations, or let you perform boolean operations where one of the sides is the result of a number or string comparison. Parentheses always require an operation within them. One expression can contain multiple parentheses. Examples:   * `${form.opt_in} \|\| (${data.num_value} > 5)` * `${form.opt_in} && (${form.address} != '')` * `!${form.value1}` |
| `Equal to` | `==` | `boolean` `number` `string` | It is used to compare booleans, numbers, and strings. Both sides should have the same type and at least one of them should contain a dynamic variable. Examples:   * `${form.opt_in} == true` * `${data.num_value} == 5` * `${form.city} == 'London'` |
| `Not equal to` | `!=` | `boolean` `number` `string` | It is used to compare booleans, numbers, and strings. Both sides should have the same type and at least one of them should contain a dynamic variable. Examples:   * `${form.opt_in} != true` * `${data.num_value} != 5` * `${form.city} != 'London'` |
| `AND` | `&&` | `boolean` | The `AND` operator performs the boolean `AND` operation. The `AND` operator evaluates as true only if both sides are true. This operator has high priority, i.e. it will be evaluated before other operators. The exception is parentheses, if one of the sides contain an opening or closing parenthesis, then the parenthesis is evaluated first. Example:   * `${form.opt_in} && ${data.boolean_value}` |
| `OR` | `||` | `boolean` | It performs the boolean `OR` operation. It evaluates as true if at least one side is true. Example:   * `${form.opt_in} \|\| ${data.boolean_value}` |
| `NOT` | `!` | `boolean` | It performs the boolean `NOT` operation. It negates the statement after it. It can be used before immediately `boolean` values or parentheses (that will result into boolean values) Examples:   * `!(${form.opt_in} \|\| ${data.boolean_value})` * `!(${data.num_value} > 5)` * `!${form.value1}` |
| `Greater than` | `>` | `number` | It is used to compare to numbers. At least one of them should be a dynamic variable. Examples:   * `${data.num_value} > 5` * `${data.num_value} > ${data.num_value2}` |
| `Greater than or equal to` | `>=` | `number` | It is used to compare to numbers. At least one of them should be a dynamic variable. Examples:   * `${data.num_value} >= 5` * `${data.num_value} >= ${data.num_value}` |
| `Less than` | `<` | `number` | It is used to compare to numbers. At least one of them should be a dynamic variable. Examples:   * `${data.num_value} < 5` * `${data.num_value} < ${data.num_value2}` |
| `Less than or equal to` | `<=` | `number` | It is used to compare to numbers. At least one of them should be a dynamic variable. Examples:   * `${data.num_value} == 5` * `${data.num_value} <= ${data.num_value}` |

### Example

Flow JSON

{

"version": "7.3",

"screens": [

{

"data": {

"value": {

"type": "boolean",

"\_\_example\_\_": true

}

},

"id": "SCREEN",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "TextInput",

"label": "Animal",

"name": "animal",

"helper-text": "Type: cat"

},

{

"type": "If",

"condition": "${data.value} && (${form.animal} == 'cat')",

"then": [

{

"type": "TextHeading",

"text": "It is a cat"

}

],

"else": [

{

"type": "TextHeading",

"text": "It is not a cat"

}

]

},

{

"type": "Footer",

"label": "Complete",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Welcome

Welcome

# Animal

Animal

# (optional)

(optional)

# Type: cat

Type: cat

# It is not a cat

# 

Complete

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Rules

#### Condition

* Should have at least one dynamic value (e.g. `${data...}` or `${form...}`).
* Should always be resolved into a boolean (i.e. no strings or number values).
* Can be used with literals but should not only contain literals.

#### Footer

* `Footer` can be added within `If` only in the first level, not inside a nested `If`.
* If there is a `Footer` within `If`, it should exist in both branches (i.e. `then` and `else`). This means that `else` becomes mandatory.
* If there is a `Footer` within `If` it cannot exist a footer outside, because the max count of `Footer` is 1 per screen.

### Limitations and restrictions

The table below show examples of limitations and validation errors that will be shown for certain cases.

| Scenario | Validation error shown |
| --- | --- |
| * `Given` there is a footer component inside `then` * `And` `else` is not defined * `When` validating the flow * `Then` it should show a validation error | Missing Footer inside one of the if branches. Branch “else” should exist and contain one Footer. |
| * `Given` there is a footer component inside `then` * `And` there is no footer inside `else` * `When` validating the flow * `Then` it should show a validation error | Missing Footer inside one of the if branches. |
| * `Given` there is no footer component inside `then` * `And` there is a footer inside `else` * `When` validating the flow * `Then` it should show a validation error | Missing Footer inside one of the if branches. |
| * `Given` there is a footer component inside `then` * `And` there is a footer component inside `else` * `And` there is a footer component outside the `If` * `When` validating the flow * `Then` it should show a validation error | You can only have 1 Footer component per screen. |
| * `Given` there is an empty array defined for `then` * `When` validating the flow * `Then` it should show a validation error | Invalid value found at: “$root/screens/path\_to\_your\_component/then” due to empty array. It should contain at least one component. |

## Switch

Supported starting with Flow JSON version 4.0

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “Switch” |
| `value _string_` **(required)** | A variable that will have its value evaluated during runtime. Example   * `${data.animal}` |
| `cases` **(required)** *Map of Array of Components* | Each property is a key (string) that maps to an Array of Components. When the `value` matches the key, it renders its array of components. Allowed components: “TextHeading”, “TextSubheading”, “TextBody”, “TextCaption”, “CheckboxGroup”, “DatePicker”, “Dropdown”, “EmbeddedLink”, “Footer”, “Image”, “OptIn”, “RadioButtonsGroup”, “TextArea”, “TextInput”.  From V7.1 ChipsSelector is also allowed together with all the previous listed components. |

### Example

Flow JSON

{

"version": "7.3",

"screens": [

{

"data": {

"value": {

"type": "string",

"\_\_example\_\_": "cat"

}

},

"id": "SCREEN",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "TextInput",

"label": "Animal",

"name": "animal",

"helper-text": "Type: cat, dog or anything else"

},

{

"type": "Switch",

"value": "${form.animal}",

"cases": {

"cat": [

{

"type": "TextHeading",

"text": "It is a cat"

}

],

"dog": [

{

"type": "TextHeading",

"text": "It is a dog"

}

],

"default": [

{

"type": "TextHeading",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Welcome

Welcome

# Animal

Animal

# (optional)

(optional)

# Type: cat, dog or anything else

Type: cat, dog or anything else

# It is neither a cat nor a dog

# 

Switch is missing required property "value".

# 

Complete

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Rules

#### Cases

* Should have at least one value. It cannot be empty (e.g. `"cases": {}`)

### Limitations and restrictions

The table below show examples of limitations and validation errors that will be shown for certain cases.

| Scenario | Validation error shown |
| --- | --- |
| * `Given` there is a `Switch` component * `And` its `cases` property is empty * `When` validating the flow * `Then` it should show a validation error | Invalid empty property found at: “$root/screens/path\_to\_your\_component/cases”. |

## Media upload

Please refer to the specific page for [media upload components](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload).

## Navigation List

Supported from Flows v6.2+.

The NavigationList component allows users to navigate effectively between different screens in a Flow, by exploring and interacting with a list of options. Each list item can display rich content such as text, images, and tags.

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “NavigationList” |
| `name _string_` **(required)** |  |
| `list-items` **(required)** *array* | Dynamic “${data.list\_items}” |
| `label _string_` | Dynamic “${data.label}” |
| `description _string_` | Dynamic “${data.description}” |
| `media-size _enum_` | {‘regular’,’large’}   Default: ‘regular’   Dynamic “${data.media-size}” |
| `on-click-action` *action* | `data_exchange` and `navigate` are supported. |

Each item in the list of items supports the following properties:

| Parameter | Description |
| --- | --- |
| `main-content` **(required)** *object* | * **(required)** title <string> * description <string> * metadata <string> |
| `end` *object* | * title <string> * description <string> * metadata <string> |
| `start` *object* | * **(required)** image <base64 encoding of an image> * alt-text <string> |
| `badge _string_` |  |
| `tags` *Array<string>* |  |
| `on-click-action` *action* | `data_exchange` and `navigate` are supported. |

Images in WebP format are not supported on iOS versions prior to iOS 14.

The `on-click-action` is required for the component, and it can be defined either:

* Once at component-level and it will apply the same action for all items in the list.
* Individually, on each item in the list to allow for different actions to be triggered.

### Example

Flow JSON

{

"version": "7.3",

"routing\_model": {

"FIRST\_SCREEN": [

"SECOND\_SCREEN",

"THIRD\_SCREEN",

"FIFTH\_SCREEN"

],

"SECOND\_SCREEN": [

"CONTACT"

],

"THIRD\_SCREEN": [

"CONTACT"

],

"FIFTH\_SCREEN": [

"CONTACT"

],

"CONTACT": []

},

"screens": [

{

"id": "FIRST\_SCREEN",

"title": "Our offers",

"data": {},

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "NavigationList",

"name": "insurances",

"list-items": [

{

"id": "home",

"main-content": {

"title": "Home Insurance",

"metadata": "Safeguard your home against natural disasters, theft, and accidents"

},

"end": {

"title": "$100",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

FIRST\_SCREEN

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Our offers

Our offers

* # 

  Home Insurance

  # 

  Safeguard your home against natural disasters, theft, and accidents

  # 

  $100

  # 

  / month
* # 

  Health Insurance

  # 

  Get essential coverage for doctor visits, prescriptions, and hospital stays

  # 

  $80

  # 

  / month
* # 

  Intergalactic Insurance

  # 

  Enjoy coverage for asteroid collisions, alien encounters, and other risks

  # 

  $1.000

  # 

  / month
* # 

  Time Travel Insurance

  # 

  Ready for paradox-related damages or unforeseen consequences of altering history

  # 

  $980

  # 

  / month
* # 

  Dream Loss Insurance

  # 

  Protection from recurring nightmares or lost opportunities due to poor sleep

  # 

  $540

  # 

  / month

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Dynamic example

In this dynamic example, you can see that `list-items` references the `insurances` of type `array` defined before it using `insurances`. When defining such a structure, you need to specify `items` in the `array`, which will be of type `object`. Then inside the `items` object, you have a `properties` dictionary with `id` and `main-content` just like in the static declaration. Both `id` will always be of type `string` and `main-content` will always be of type `object`, and accompanied by a definition of its structure. Within the `insurances` array, you must define concrete examples in the `__example__` field.

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"FIRST\_SCREEN": [

"SECOND\_SCREEN",

"THIRD\_SCREEN"

],

"SECOND\_SCREEN": [

"CONTACT"

],

"THIRD\_SCREEN": [

"CONTACT"

],

"CONTACT": []

},

"screens": [

{

"id": "FIRST\_SCREEN",

"title": "Our offers",

"data": {

"insurances": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"main-content": {

"type": "object",

"properties": {

"title": {

"type": "string"

}

}

}

}

},

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

FIRST\_SCREEN

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Our offers

Our offers

# Our offers

Our offers

* # 

  Home Insurance

  # 

  Safeguard your home against natural disasters, theft, and accidents.
* # 

  Health Insurance

  # 

  Get essential coverage for doctor visits, prescriptions, and hospital stays.

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

### Limits and restrictions

* The `Navigation List` component cannot be used on a terminal screen.
* There can be at most 2 `Navigation List` components per screen.
* The `Navigation List` components cannot be used in combination with any other components in the same screen.
* There can be only one item with a `badge` per list.
* The `end` add-on cannot be used in combination with `media-size` set to `large`.
* The `on-click-action` cannot be defined simultaneously on component-level and on item-level.

#### Component restrictions

| Property | Limit / Restriction |
| --- | --- |
| list-items | minimum 1 and maximum 20 items Content will not be rendered if the limit is reached |
| label | 80 characters Content will truncate if the limit is reached |
| description | 300 characters Content will truncate if the limit is reached |

#### List items restrictions

Content over the limit specified will not be rendered.

| Add-on / property | Property | Limit / Restriction |
| --- | --- | --- |
| start | image | 100KB Images over the limit will be replaced by a placeholder |
| main-content | title description metadata | 30 characters 20 characters 80 characters |
| end | title description metadata | 10 characters 10 characters 10 characters |
| badge |  | 15 characters |
| tags |  | 15 characters 3 items |

## Chips Selector

Chips Selector component allows users to pick multiple selections from a list of options.

Supported starting with Flow JSON version 6.3

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “ChipsSelector” |
| `data-source _array_` **(required)** | Dynamic “${data.data\_source}”  * *Array< id: String, title: String, enabled: Boolean, on-select-action: {name: 'update\_data', payload: {...}}, on-unselect-action: {name: 'update\_data', payload: {...}} >* |
| `name _string_` **(required)** |  |
| `min-selected-items _int_` | Dynamic “${data.min\_selected\_items}” |
| `max-selected-items _int_` | Dynamic “${data.max\_selected\_items}” |
| `enabled _boolean_` | Dynamic “${data.is\_enabled}” |
| `label _string_` **(required)** | Dynamic “${data.label}” |
| `required _boolean_` | Dynamic “${data.is\_required}” |
| `visible _boolean_` | Dynamic “${data.is\_visible}”   Default: True |
| `description _string_` | Dynamic “${data.description}” |
| `init-value _array<string>` | Dynamic “${data.init-value}”   Only available when component is outside Form component |
| `error-message _string_` | Dynamic “${data.error-message}”   Only available when component is outside Form component |

If `on-unselect-action` is not added, `on-select-action` will continue to handle both selection and unselection events. However, if `on-unselect-action` is defined, it will exclusively handle unselection, while `on-select-action` will be used solely for selection.

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Label  Description  Min # of options  Max # of options | 80 Characters  300 Characters  2  20 |

### Example

Flow JSON

{

"version": "6.3",

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "ChipsSelector",

"name": "chips",

"label": "Personalize your experience",

"description": "Choose your interests to get personalized design ideas and solution",

"max-selected-items": 2,

"data-source": [

{

"id": "room\_layout",

"title": "🏡 Room layouts"

},

{

"id": "lighting",

"title": "💡 Lighting"

},

{

"id": "renovation",

"title": "🛠️ Renovation"

},

{

"id": "furnitures",

"title": "📐 Room layouts"

}

]

},

{

"type": "Footer",

"label": "Continue",

"on-click-action": {

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

# 

Personalize your experience

# 

(optional)

# 

Choose your interests to get personalized design ideas and solution

# 

Choose up to 2 options.

🏡 Room layouts

💡 Lighting

🛠️ Renovation

📐 Room layouts

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Image Carousel

The Image Carousel component allows users to slide through multiple images.

Supported from Flows v7.1+.

| Parameter | Description |
| --- | --- |
| `type _string_` **(required)** | “ImageCarousel” |
| `images` **(required)** *array* | Dynamic “${data.images}” |
| `aspect-ratio _string_` | Either “4:3” or “16:9”. Default: “4:3”. |
| `scale-type _string_` | Either “contain” or “cover”. Default: “contain”. |

Each item in the list of images supports the following properties:

| Parameter | Description |
| --- | --- |
| `src _string_` **(required)** | Base64 of an image. |
| `alt-text _string_` **(required)** | Alternative text for accessibility purposes. |

### Limits and restrictions

| Type | Limit / Restriction |
| --- | --- |
| Min # of images  Max # of images  Max # of ImageCarousel per screen  Max # of ImageCarousel per Flow | 1  3  2  3 |

### Example

Flow JSON

{

"version": "7.1",

"screens": [

{

"id": "DEMO\_SCREEN",

"terminal": true,

"title": "Demo screen",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "ImageCarousel",

"scale-type": "cover",

"images": [

{

"alt-text": "Landscape image",

"src": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAKCAIAAAAsFXl4AAAANElEQVR4nGL5ctWagWjwuH0b8YqZiFdKKhg1Gg2wzOawIV61t1AF8YqHZoAMTaMBAQAA//9ljAXx5eZ2mwAAAABJRU5ErkJggg=="

},

{

"alt-text": "Square image",

"src": "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAALElEQVR4nGIRPRrBgATeWLsjc5kY8AKaSrPIL3FA5i9evZNudhOQBgQAAP//2DAFw06W30wAAAAASUVORK5CYII="

},

{

"alt-text": "Portrait image",

"src": "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAIAAAA7jDsBAAAALUlEQVR4nGIJWfabAQls8DVA5jIx4AUjVZqRP2AJMn//v6V0s3voSgMCAAD//6kkBrFsdv78AAAAAElFTkSuQmCC"

}

]

},

{

"type": "Footer",

"label": "Continue",

"on-click-action": {

"name": "complete",

"payload": {}

}

}

]

}

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Demo screen

Demo screen

![Landscape image. Image 1 of 3. Swipe with three fingers to see more images.](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAKCAIAAAAsFXl4AAAANElEQVR4nGL5ctWagWjwuH0b8YqZiFdKKhg1Gg2wzOawIV61t1AF8YqHZoAMTaMBAQAA//9ljAXx5eZ2mwAAAABJRU5ErkJggg==)

![Square image. Image 2 of 3. Swipe with three fingers to see more images.](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAALElEQVR4nGIRPRrBgATeWLsjc5kY8AKaSrPIL3FA5i9evZNudhOQBgQAAP//2DAFw06W30wAAAAASUVORK5CYII=)

![Portrait image. Image 3 of 3. Swipe with three fingers to see more images.](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAIAAAA7jDsBAAAALUlEQVR4nGIJWfabAQls8DVA5jIx4AUjVZqRP2AJMn//v6V0s3voSgMCAAD//6kkBrFsdv78AAAAAElFTkSuQmCC)

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Dynamic components

If you check the attribute model of certain components (`Dropdown`, `DatePicker`, `RadioButtonsGroup`, and `CheckboxGroup`), you will find that some of them accept the `on-xxxx-action` attribute. This attribute allows the component to trigger a data-exchange action. It can be used in the following scenarios:

* When a user selects a date in the DatePicker component.
* When the business needs to fetch available data (such as table slots or tickets) for this selected date by calling a data\_exchange action.
* Once the data is received, the user will see an updated screen with new data.

## Prerequisites

The following steps require communication between the client and the business server. Please ensure that you have configured the data channel before attempting to use this feature.

## Step 1 - Defining the layout

Begin with a minimal example, consisting of an empty form and a CTA button, and gradually add more components.

Flow JSON

{

"version": "7.3",

"routing\_model": {

"BOOKING": []

},

"screens": [

{

"id": "BOOKING",

"terminal": true,

"title": "Booking appointment",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "booking-form",

"children": [

{

"type": "Footer",

"label": "Book",

"on-click-action": {

"name": "complete",

"payload": {}

}

}

]

}

]

}

}

]

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Booking appointment

Booking appointment

# 

Book

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

Suppose you want to build a simple form that takes a date and displays the list of available time slots. First, add a `DatePicker` component:

Flow JSON

{

"version": "7.3",

"routing\_model": {

"BOOKING": []

},

"screens": [

{

"id": "BOOKING",

"terminal": true,

"title": "Booking appointment",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "booking-form",

"children": [

{

"type": "DatePicker",

"label": "Select a date",

"name": "date"

},

{

"type": "Footer",

"label": "Book",

"on-click-action": {

"name": "complete",

"payload": {}

}

}

]

}

]

}

}

]

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Booking appointment

Booking appointment

# Select a date

Select a date

# (optional)

(optional)

# 

Book

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

Next step is to add a `Dropdown` to display all available time slots:

Flow JSON

{

"version": "7.3",

"routing\_model": {

"BOOKING": []

},

"screens": [

{

"id": "BOOKING",

"terminal": true,

"title": "Booking appointment",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "booking-form",

"children": [

{

"type": "DatePicker",

"label": "Select a date",

"name": "date"

},

{

"type": "Dropdown",

"label": "Pick a slot",

"name": "selected\_slot",

"data-source": [

{

"id": "1",

"title": "13.00"

}

]

},

{

"type": "Footer",

"label": "Book",

"on-click-action": {

"name": "complete",

"payload": {}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Booking appointment

Booking appointment

# Select a date

Select a date

# (optional)

(optional)

# Pick a slot

Pick a slot

# Pick a slot

(optional)

#

# 

Book

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Step 2 - Defining 3P data

Until now, the examples have used static mock data, but now you can connect a screen with dynamic data. Dynamic data can originate from various sources:

* Initial message payload
* `navigate` - transitioning from the previous screen using a `navigate` action
* `data_exchange` - a request to the business server

In this example, assume that the data will come from a `data_exchange` request. So, instruct Flow JSON to use the data channel request by providing the `"data_api_version": "3.0"` property.

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"BOOKING": []

},

"screens": [

{

"id": "BOOKING",

"terminal": true,

"title": "Booking appointment",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "booking-form",

"children": [

{

"type": "DatePicker",

"label": "Select a date",

"name": "date"

},

{

"type": "Dropdown",

"label": "Pick a slot",

"name": "selected\_slot",

"data-source": [

{

"id": "1",

"title": "13.00"

}

]

},

{

"type": "Footer",

"label": "Book",

"on-click-action": {

"name": "complete",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Booking appointment

Booking appointment

# Select a date

Select a date

# (optional)

(optional)

# Pick a slot

Pick a slot

# Pick a slot

(optional)

#

# 

Book

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Step 3 - Allowing DatePicker to make a request to the server

Provide `"on-select-action"` to the `DatePicker` component so you can execute the call to the business server. In the `payload`, you can pass any data you want to the business server to understand the type of request.

```
```
{  
   "on-select-action":{  
      "name":"data_exchange",  
      "payload":{  
         "date":"${form.date}",  
         "component_action":"update_date"  
      }  
   }  
}
```
```

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"BOOKING": []

},

"screens": [

{

"id": "BOOKING",

"terminal": true,

"title": "Booking appointment",

"layout": {

"type": "SingleColumnLayout",

"children": [

{

"type": "Form",

"name": "booking-form",

"children": [

{

"type": "DatePicker",

"label": "Select a date",

"name": "date"

},

{

"type": "Dropdown",

"label": "Pick a slot",

"name": "selected\_slot",

"data-source": [

{

"id": "1",

"title": "13.00"

}

],

"on-select-action": {

"name": "data\_exchange",

"payload": {

"date": "${form.date}",

"component\_action": "update\_date"

}

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Booking appointment

Booking appointment

# Select a date

Select a date

# (optional)

(optional)

# Pick a slot

Pick a slot

# Pick a slot

(optional)

#

# 

Book

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

In this example, send the value of the field `date` to the action payload, and also add some static data `"component_action": "update_date"` to help the server recognize the type of request. There is no strict format here; you can choose whatever works for your case.

Now when you try to select a date, a `data_exchange` request will be executed. The server may return the data that can change the UI. For now, your Flow doesn’t expect or use any data from the server. Fix it by first defining the data model that you expect for a screen.

## Step 4 - Define a server data model

Declare a `data` property for the screen outlining the data that you expect to receive from the server. In this case, you want to receive an `available_slots` array with time slot options.

It should have the following model. The `__example__` field is mock data used to display the data within the web preview.

```
```
{  
    "available_slots": {  
        "type": "array",  
        "items": {  
            "type": "object",  
            "properties": { "id": {"type": "string"}, "title": {"type": "string"} }  
        },  
        "__example__": [ {"id": "1", "title": "08:00"}, {"id": "2", "title": "09:00"} ]  
    }  
}
```
```

It means that the expected payload to be returned from server can look like the following:

```
```
{  
    "version": "3.0",  
    "screen": "BOOKING",  
    "data": {  
       "available_slots": [ {"id": "1", "title": "08:00"}, {"id": "2", "title": "09:00"} ]  
    }  
}
```
```

So your Flow JSON now should look like the following:

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"BOOKING": []

},

"screens": [

{

"id": "BOOKING",

"terminal": true,

"title": "Booking appointment",

"data": {

"available\_slots": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "1",

"title": "08:00"

},

{

"id": "2",

"title": "09:00"

}

]

}

},

"layout": {

"type": "SingleColumnLayout",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Booking appointment

Booking appointment

# Booking appointment

Booking appointment

# Select date

Select date

# Time

Time

# Time

(optional)

#

# 

Start

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Step 5 - Control visibility of the component

Now, when you select a date in `DatePicker`, the application will send a request to the business server to get available time slots. However, you don’t want a `Dropdown` to be visible until there is data to display. How can you hide it?

For this purpose, you can use the `visible` attribute on `Dropdown` and connect it with server data. The business server can control the visibility of the component based on a set condition.

So, you need to make the following changes:

* Define `is_dropdown_visible` in the `data` model of the screen.
* Connect a property via dynamic binding `"visible": "${data.is_dropdown_visible}"`.
* Ensure that the server returns the correct data.

**Update your code:**

*NOTE: The current version of the playground doesn’t support endpoint requests*

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"BOOKING": []

},

"screens": [

{

"id": "BOOKING",

"terminal": true,

"title": "Booking appointment",

"data": {

"available\_slots": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "1",

"title": "08:00"

},

{

"id": "2",

"title": "09:00"

}

]

},

"is\_dropdown\_visible": {

"type": "boolean",

"\_\_example\_\_": false

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Booking appointment

Booking appointment

# Booking appointment

Booking appointment

# Select date

Select date

# 

Start

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Summary

You now have a dynamic component set up. If you’re facing any challenges, you can ask a question on the developer forum.
