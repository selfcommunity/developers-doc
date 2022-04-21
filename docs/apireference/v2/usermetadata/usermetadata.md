---
sidebar_label: User's custom fields (metadata)
sidebar_position: 1
title: How it works
---

It is possible to add custom fields to the predefined user's fields set. 

This can be useful for adding data to the user and thus saving custom information that are not part of the basic information provided by Selfcommunity.

#### Step. 1 - Define the structure of the additional custom fields

Before you can start adding custom data to the user, it is necessary to define the structure of the additional custom fields. 
An example of a structure can be the following:

````mdx-code-block

```json
{
    "company_name": {
        "label": "Company name",
        "mandatory": True
    },
    "company_website": {
        "label": "Company website",
        "type": "url"
    },
    "company_google_maps": {
        "label": "Company Google Maps position url",
        "type": "url"
    },
    "company_role": {
        "label": "Role in the company",
        "type": "enum",
        "type_options": [
            "Chief Executive Officer (CEO)",
            "Chief Operating Officer (COO)",
            "Chief Financial Officer (CFO) or Controller",
            "Chief Marketing Officer (CMO)",
            "Chief Technology Officer (CTO)",
            "President",
            "Vice President",
            "Executive Assistant",
            "Marketing manager",
            "Product manager",
            "Project manager",
            "Finance manager",
            "Human resources manager",
            "Marketing specialist",
            "Business analyst",
            "Human resource personnel",
            "Accountant",
            "Sales representative",
            "Customer service representative",
            "Administrative assistant",
            "Employee",
            "Consultant"
        ]
    },
    "phone_number": {
        "label": "Telephone",
        "type": "phone_number"
    }
}
```

</TabItem>
</Tabs>
````

From the example it is possible to notice that to define the fields it is necessary to choose the type of field among those available.
