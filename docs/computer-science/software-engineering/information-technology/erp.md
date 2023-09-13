# ERP

- ERP - enterprise resource planning

## Intro

- how a typical business works
    - first **customer** talks with -> **sales department**
    - sales department -> asks from **inventory department** for the information on product
    - if not available -> asks form **production planning** for the products
    - the production planning -> asks from **inventory management** if raw material is available
    - if not available -> asks for the **vendors** to provide the raw material
    - then it provides **shop floor execution** with the details for the products to be made
    - **shop floor execution** asks for the **hr department** if they need more team members
    - in the end
        - all the department report to the **finance** department for their expenses and sales
- that means a business have different business units, and each of them have their
  responsibility, and they all share some data.
- how erp helps here
    - it helps to maintain all the data ans transaction which takes place

## Types

- ERP are of two types
    - decentralized
    - centralized

## Decentralized

- here data is stored locally at each instance
- data duplication takes place
- more data maintenance cost
- easy to setup
- nod good for business, as it leads to multiple points of failure

e.g.

- customer comes with queries about a product
    - sales teams forward the query to inventory team
    - this takes time
    - customer leaves for another business

- customer asks for some products
    - while creating products data inconsistency takes place
    - wrong information may be shared
    - this leads to more loss

## Centralized

- data is stored in central location and shared between the departments
    - each bu (business unit) has certain level of access over the data.
- data is shared in real time so everyone get update data.