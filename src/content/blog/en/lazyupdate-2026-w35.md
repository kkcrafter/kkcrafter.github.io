---
title: "LazyUpdate 2026-W35 — Database Fundamentals & Internals"
description: "Revision on relational database internals"
pubDate: 2026-08-27
tags: ["lazyupdate", "it-dev", "learninglog"]
lang: "en"
draft: false
image:
  src: "../images/data-engineering-whiteboard-2026-w35.png"
  alt: "The Data Engineering whiteboard in Heptabase, showing this period's cards grouped into sections: JOIN Clauses, Query Optimization, T-SQL, Stored Procedures, View, DB Scaling, Indexing, Data Normalization, Normal Forms, Data Warehouse and Migration."
---

## About this post

I am now doing a trial to record my learning progress regularly, marked by #LazyUpdate.

This week I tried to refresh and organize my knowledge related to Databases that I (mostly) learned quite some years ago.

---

**TL;DR** — Four days (24–27 August 2026), 79 new cards on my Data Engineering whiteboard, worked through roughly in dependency order: keys → normalization → modeling → migration → scaling → query optimization → concurrency → views.

![The Data Engineering whiteboard in Heptabase, showing this period's cards grouped into sections: JOIN Clauses, Query Optimization, T-SQL, Stored Procedures, View, DB Scaling, Indexing, Data Normalization, Normal Forms, Data Warehouse and Migration.](../images/data-engineering-whiteboard-2026-w35.png)

*The Data Engineering whiteboard at the end of the week — sections roughly mirror the categories below.*

## Keys & Constraints (4)

- Primary Key vs Foreign Key?
- Superkey
- Candidate key
- Why superkey matters for BCNF

## Normalization & Denormalization (4)

- The Unnormalized Starting Point
- Normalization vs Denormalization
- Data Denormalization
- Why stop at 3NF (or BCNF)

## Data Modeling (4)

- Data Modeling
- Conceptual model
- Logical Model
- Physical model

## Slowly Changing Dimensions (5)

- Slowly Changing Dimensions (SCD)
- SCD Type 1
- SCD Type 2
- SCD Type 3
- SCD vs Normalization

## Indexing (9)

- Database Index
- Create an Index
- Reindexing
- Clustered Index (Phone book)
- Non-Clustered Index (Textbook)
- Clustered vs Non-Clustered Index
- Local Index
- Global Index
- Local vs Global Index

## Database Migration (7)

- Database migration
- Data Migration vs Database Migration
- Challenges in Database Migrations
- Schema Conversion
- Homogeneous vs Heterogeneous database migration
- Schema Migration (Renovating the house)
- System Migration (Moving to a new house)

## Stored Procedures & Triggers (6)

- Stored procedure
- Why Stored Procedures?
- How Stored Procedure Work?
- Trade-Offs of Stored Procedures
- Stored Procedure vs Trigger
- Stored Procedure vs Trigger — Scenarios

## Scaling: Sharding, Replication, Partitioning, Federation (11)

- Sharding
- Replication
- Replication vs Sharding
- Database federation
- Table Partitioning (Local Split)
- Table Partitioning vs Database Federation
- Table Partitioning vs Sharding
- Horizontal vs Vertical Partitioning
- Horizontal Partitioning (Row-Level)
- Vertical Partitioning (Column-Level)
- Does partitioning improve READ or WRITE?

## Query Optimization (9)

- Query Optimisation
- Query Optimizer
- Analyze the Execution Plan
- Use Indexes Strategically
- Avoid `SELECT *`
- Filter Data Early
- Update Statistics
- N+1 Problem
- Solutions to N+1

## Transactions & ACID (7)

- Transaction
- How to Write a Transaction
- Atomicity ("All or Nothing")
- (System) Consistency
- Business Consistency
- Isolation
- Durability

## Isolation Levels & Locking (8)

- Isolation level
- The Four Standard Isolation Levels
- The Three "Read Phenomena" (The Glitches)
- Locking
- The Two Primary Lock Types
- Lock Granularity
- How Isolation Levels Actually Use Locks
- The Side Effect: Deadlocks

## Views (5)

- Why use Views?
- What is a View?
- What is a Dynamic View?
- Dynamic Views vs Materialized Views
- Materialized View
