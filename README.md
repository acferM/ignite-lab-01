# Ignite Lab #1

The ignite lab is a event made by [Rocketseat](https://github.com/rocketseat-education), aiming to show new techs and enviroments to create projects.

In that app, i've learned microservices backend strategies using Kafka + GraphQL + NestJS.




## Authors

- [Matheus Acfer](https://www.github.com/acferM)


## Used Stack

- **Front-end:** [React](https://pt-br.reactjs.org/), [NextJS](https://nextjs.org), [GraphQL](https://graphql.org/), [Apollo](https://www.apollographql.com/), [TailwindCSS](https://tailwindcss.com/)

- **Back-end:** [Node](https://nodejs.org), [NestJS](https://nestjs.com/), [Prisma](https://prisma.io), [Docker Compose](https://docs.docker.com/compose/), [Kafka](https://kafka.apache.org/), [GraphQL](https://graphql.org/), [Apollo Federation](https://www.apollographql.com/docs/federation/)


## Running backend locally

### Clone the project

```bash
git clone https://github.com/acferM/ignite-lab-01.git
```

### Enter the project directory

```bash
cd ignite-lab-01
```

### Install services dependencies

in the repository folder, run:

- with yarn:

    1. ```bash
        cd purchases && yarn
        ```

    2. ```bash
        cd classroom && yarn
        ```

    3. ```bash
        cd gateway && yarn
        ```

- with npm:

    1. ```bash
        cd purchases && npm i
        ```

    2. ```bash
        cd classroom && npm i
        ```

    3. ```bash
        cd gateway && npm i
        ```

### Start docker containers

in the repository folder, run:

```bash
docker-compose up
```

### Setup enviroment variables
Read the next section to setup the backend .env files

### Start services

in the repository folder, run:

- with yarn:

    1. ```bash
        cd purchases && yarn dev
        ```

    2. ```bash
        cd classroom && yarn dev
        ```

    3. ```bash
        cd gateway && yarn dev
        ```

- with npm:

    1. ```bash
        cd purchases && npm run dev
        ```

    2. ```bash
        cd classroom && npm run dev
        ```

    3. ```bash
        cd gateway && npm run dev
        ```

## Backend enviroment variables

To run this project, you will need the following enviroment variables in your .env file

- purchases/.env
    
    `AUTH0_AUDIENCE` Your audience key from [AUTH0](https://auth0.com/)

    `AUTH0_DOMAIN` The domain of your [AUTH0](https://auth0.com/) app

    `DATABASE_URL="postgresql://docker:docker@localhost:5432/purchases?schema=public"` Url to connect to the database created with docker-compose in [Prisma](https://prisma.io)

    `KAFKA_BROKERS=localhost:29092` Url to access kafka brokers created with docker-compose

- classroom/.env

    `AUTH0_AUDIENCE` Your audience key from [AUTH0](https://auth0.com/)

    `AUTH0_DOMAIN` The domain of your [AUTH0](https://auth0.com/) app

    `DATABASE_URL="postgresql://docker:docker@localhost:5432/classroom?schema=public"` Url to connect to the database created with docker-compose in [Prisma](https://prisma.io)
## Running frontend locally

### Install dependencies

In the repository folder, run:

- with yarn:

    ```bash
    cd web && yarn
    ```
- with npm:

    ```bash
    cd web && npm i
    ```

### Setup enviroment variables
Read the next section to setup the frotend .env file

### Start the project

In the web folder, run:

- with yarn:

    ```bash
    yarn dev
    ```
- with npm:

    ```bash
    npm run dev
    ```## Fronted enviroment variables

To run this project, you will need the following enviroment variables in your .env.local file

`AUTH0_SECRET` Your [AUTH0](https://auth0.com/) secret key

`AUTH0_CLIENT_ID` The id of the your client in the [AUTH0](https://auth0.com/)

`AUTH0_CLIENT_SECRET` Secret key from the client in [AUTH0](https://auth0.com/)

`AUTH0_BASE_URL=http://localhost:3000` App base url

`AUTH0_AUDIENCE` Your app audience in [AUTH0](https://auth0.com/)

`AUTH0_ISSUER_BASE_URL` Base url from the app issuar in [AUTH0](https://auth0.com/)

## API documentation

This api uses [GraphQL](https://graphql.org/), all queries runs in the `http://localhost:3332/graphql` route

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Queries](#queries)
  * [Mutations](#mutations)
  * [Objects](#objects)
    * [Course](#course)
    * [Enrollment](#enrollment)
    * [User](#user)
    * [Product](#product)
    * [Purchase](#purchase)
    * [User](#user)
  * [Inputs](#inputs)
    * [CreateCourseInput](#createcourseinput)
    * [CreateProductInput](#createproductinput)
    * [CreatePurchaseInput](#createpurchaseinput)
  * [Enums](#enums)
    * [PurchaseStatus](#purchasestatus)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [DateTime](#datetime)
    * [ID](#id)
    * [String](#string)

</details>

## Queries
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>courses</strong></td>
<td valign="top">[<a href="#course">Course</a>!]!</td>
<td>Returns available courses</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>course</strong></td>
<td valign="top"><a href="#course">Course</a>!</td>
<td>Returns an specific course from the authenticated user</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Id from the queried course</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>enrollments</strong></td>
<td valign="top">[<a href="#enrollment">Enrollment</a>!]!</td>
<td>Returns all enrollments</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>students</strong></td>
<td valign="top">[<a href="#user">User</a>!]!</td>
<td>Returns all students</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td>Returns all products</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>purchases</strong></td>
<td valign="top">[<a href="#purchase">Purchase</a>!]!</td>
<td>Returns all purchases</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>me</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td>Returns authenticated user info</td>
</tr>
</tbody>
</table>

## Mutations
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createCourse</strong></td>
<td valign="top"><a href="#course">Course</a>!</td>
<td>Create a new course</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createcourseinput">CreateCourseInput</a>!</td>
<td>Data with the title of the course</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createProduct</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td>Create a new product</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createproductinput">CreateProductInput</a>!</td>
<td>Data with the title of the product</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createPurchase</strong></td>
<td valign="top"><a href="#purchase">Purchase</a>!</td>
<td>Create a new purchase</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#createpurchaseinput">CreatePurchaseInput</a>!</td>
<td>Data with the id of the purchased product</td>
</tr>
</tbody>
</table>

## Objects

### Course

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>Id field</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Course title</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Slug based on the title of the course ex: 'nestjs-course'</td>
</tr>
</tbody>
</table>

### Enrollment

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>Id field</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>student</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td>Enrolled user</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>course</strong></td>
<td valign="top"><a href="#course">Course</a>!</td>
<td>Enrollment course</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canceledAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>Date from enrollment cancel</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>Date from enrollment creation</td>
</tr>
</tbody>
</table>

### User

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>authUserId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>Id field (id in the AUTH0)</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>enrollments</strong></td>
<td valign="top">[<a href="#enrollment">Enrollment</a>!]!</td>
<td>User enrollments</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>purchases</strong></td>
<td valign="top">[<a href="#purchase">Purchase</a>!]!</td>
<td>User purchases</td>
</tr>
</tbody>
</table>

### Product

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>Id field</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Product title</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>slug</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Slug based on the title of the product ex: 'nestjs-course'</td>
</tr>
</tbody>
</table>

### Purchase

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>Id field</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#purchasestatus">PurchaseStatus</a>!</td>
<td>Statuses of the purchase</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>Date from purchase creation</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td>Purchased product</td>
</tr>
</tbody>
</table>

## Inputs

### CreateCourseInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Course title</td>
</tr>
</tbody>
</table>

### CreateProductInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Product title</td>
</tr>
</tbody>
</table>

### CreatePurchaseInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>productId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>Id from purchased product</td>
</tr>
</tbody>
</table>

## Enums

### PurchaseStatus

Available purchase statuses

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td>Purchase still pending</td>
</tr>
<tr>
<td valign="top"><strong>APPROVED</strong></td>
<td>Purchase finished</td>
</tr>
<tr>
<td valign="top"><strong>REJECTED</strong></td>
<td>Purchase rejected</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTime

A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
## Improvements

This repository, follows the construction in the classes, although there could be some improvements:

- [ ]  Implement tests with [JestJS](https://jestjs.io)
- [ ]  Implement real payment using [Stripe](https://stripe.com)
- [ ]  Implement video streaming to courses
- [ ]  Remove authentication strategy from [AUTH0](https://auth0.com)
- [ ]  Implement my own JWT authentication method
