# event-crud-master

Create an app for managing events that enables users to do all the CRUD actions. 

Here is the OpenAPI Spec: 

{"swagger":"2.0","info":{"description":"","title":"standard public schema","version":"12.0.2 (a4e00ff)"},"host":"mnwefvnykbgyhbdzpleh.supabase.co:443","basePath":"/","schemes":["https"],"consumes":["application/json","application/vnd.pgrst.object+json;nulls=stripped","application/vnd.pgrst.object+json","text/csv"],"produces":["application/json","application/vnd.pgrst.object+json;nulls=stripped","application/vnd.pgrst.object+json","text/csv"],"paths":{"/":{"get":{"produces":["application/openapi+json","application/json"],"responses":{"200":{"description":"OK"}},"summary":"OpenAPI description (this document)","tags":["Introspection"]}},"/notes":{"get":{"parameters":[{"$ref":"#/parameters/rowFilter.notes.id"},{"$ref":"#/parameters/rowFilter.notes.created_at"},{"$ref":"#/parameters/rowFilter.notes.note"},{"$ref":"#/parameters/select"},{"$ref":"#/parameters/order"},{"$ref":"#/parameters/range"},{"$ref":"#/parameters/rangeUnit"},{"$ref":"#/parameters/offset"},{"$ref":"#/parameters/limit"},{"$ref":"#/parameters/preferCount"}],"responses":{"200":{"description":"OK","schema":{"items":{"$ref":"#/definitions/notes"},"type":"array"}},"206":{"description":"Partial Content"}},"tags":["notes"]},"post":{"parameters":[{"$ref":"#/parameters/body.notes"},{"$ref":"#/parameters/select"},{"$ref":"#/parameters/preferPost"}],"responses":{"201":{"description":"Created"}},"tags":["notes"]},"delete":{"parameters":[{"$ref":"#/parameters/rowFilter.notes.id"},{"$ref":"#/parameters/rowFilter.notes.created_at"},{"$ref":"#/parameters/rowFilter.notes.note"},{"$ref":"#/parameters/preferReturn"}],"responses":{"204":{"description":"No Content"}},"tags":["notes"]},"patch":{"parameters":[{"$ref":"#/parameters/rowFilter.notes.id"},{"$ref":"#/parameters/rowFilter.notes.created_at"},{"$ref":"#/parameters/rowFilter.notes.note"},{"$ref":"#/parameters/body.notes"},{"$ref":"#/parameters/preferReturn"}],"responses":{"204":{"description":"No Content"}},"tags":["notes"]}}},"definitions":{"notes":{"required":["id","created_at"],"properties":{"id":{"description":"Note:\nThis is a Primary Key.<pk/>","format":"bigint","type":"integer"},"created_at":{"default":"now()","format":"timestamp with time zone","type":"string"},"note":{"format":"text","type":"string"}},"type":"object"}},"parameters":{"preferParams":{"name":"Prefer","description":"Preference","required":false,"enum":["params=single-object"],"in":"header","type":"string"},"preferReturn":{"name":"Prefer","description":"Preference","required":false,"enum":["return=representation","return=minimal","return=none"],"in":"header","type":"string"},"preferCount":{"name":"Prefer","description":"Preference","required":false,"enum":["count=none"],"in":"header","type":"string"},"preferPost":{"name":"Prefer","description":"Preference","required":false,"enum":["return=representation","return=minimal","return=none","resolution=ignore-duplicates","resolution=merge-duplicates"],"in":"header","type":"string"},"select":{"name":"select","description":"Filtering Columns","required":false,"in":"query","type":"string"},"on_conflict":{"name":"on_conflict","description":"On Conflict","required":false,"in":"query","type":"string"},"order":{"name":"order","description":"Ordering","required":false,"in":"query","type":"string"},"range":{"name":"Range","description":"Limiting and Pagination","required":false,"in":"header","type":"string"},"rangeUnit":{"name":"Range-Unit","description":"Limiting and Pagination","required":false,"default":"items","in":"header","type":"string"},"offset":{"name":"offset","description":"Limiting and Pagination","required":false,"in":"query","type":"string"},"limit":{"name":"limit","description":"Limiting and Pagination","required":false,"in":"query","type":"string"},"body.notes":{"name":"notes","description":"notes","required":false,"in":"body","schema":{"$ref":"#/definitions/notes"}},"rowFilter.notes.id":{"name":"id","required":false,"format":"bigint","in":"query","type":"string"},"rowFilter.notes.created_at":{"name":"created_at","required":false,"format":"timestamp with time zone","in":"query","type":"string"},"rowFilter.notes.note":{"name":"note","required":false,"format":"text","in":"query","type":"string"}},"externalDocs":{"description":"PostgREST Documentation","url":"https://postgrest.org/en/v12.0/api.html"}}

The anon key and url can be deduced fomr this: https://mnwefvnykbgyhbdzpleh.supabase.co/rest/v1/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/event-crud-master.git
cd event-crud-master
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
