---
title: Database
---

# Database

A database is a collection of related data.

> DBMS(Database Management System)

A database management system is a collection of programs that enables users to create and maintain a database.

* Data base facilities 

1. defining         -  specifying  data types , structures and constraints of data to be stored
2. constructing   - storing data on some storage medium (process control by DBMS)
3. manipulating  - querying , retrieving , updating and generating reports from data.
4. sharing  - multiple users and program to access database simultaneously.

# Data Models

A data model  is a collection of concepts that is used to describe the structure of a data base.

* Data Model categories

1. High - level or Conceptual data models   - provide concept that are close to the way user perceive data.

2. Low -level or Physical data models - provide concept how data is stored on computer storage (magnetic disk).

# Schema

Description of a database 

# Instance / Database state  / Snapshot/Current set of occurrences  

The data in the database at a particular moment of time.

#### Three- schema architecture 

1. Internal level
   * Has a internal schema/physical schema which describe physical storage structure and access path for the database
   * uses physical model 
2. conceptual level
   * Has conceptual schema/logical schema which describe the structure of whole database.
   * hide physical storage structure  details and describe entities , relationships, user operations and constrains.
3. external or view level
   * has no. of external schema or user views . 
   * describe the part of DB in which the user is interested and hide rest of the database from that user.

# DBMS Languages

* DDL (data definition language ) 
* SDL (storage definition language) 
* VDL (view definition language)
* DML (data manipulation language)
* DCL ( data control language)

