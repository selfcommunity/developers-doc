---
sidebar_label: User's custom fields (metadata)
sidebar_position: 1
title: How it works
---

It is possible to add custom fields to the predefined user's fields set. 

This can be useful for adding data to the user and thus saving custom information that are not part of the basic information provided by Selfcommunity.

#### Define the structure of the additional custom fields

Before you can start adding custom data to the user, it is necessary to define the structure of the additional custom fields. 
An example of a structure can be the following:

```json
{
    "company_name": {
        "label": "Company name",
        "mandatory": true
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


Starting from this example it is possible to notice that to define the fields it is necessary to choose a field name (the key of the json dictionary)
and the type of field among those available:

#### Types available

| Type         | Description                                                                                     |
|--------------|-------------------------------------------------------------------------------------------------|
| string       | A string (this is the default value for type and can be omitted in the metadata json definition |
| integer      | An integer                                                                                      |
| phone_number | A phone number (eg: +39 376349****)                                                             |
| enum         | An enumeration, it also needs a list of available options to be defined using "type_options".   |
| url          | An URL                                                                                          |
| email        | An email                                                                                        | 

To define custom fields it is also possible to define a field label.

#### Create an account passing custom fields

After defining the custom fields for the user you can finally pass them the account create 

[Create an account](/docs/apireference/v2/account/create_an_account.md)

as if they were standard user fields.

#### Update the user passing custom fields

You can pass them in the user PATCH 

[Patch a specific User](/docs/apireference/v2/user/patch_a_specific_user)

as if they were standard user fields.

#### Retrieve the user with custom fields

Now retrieving a user will return also the custom fields  

[get a specific User](/docs/apireference/v2/user/get_a_specific_user)

as if they were standard user fields.