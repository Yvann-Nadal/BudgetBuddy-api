# BudgetBuddy API

**BudgetBuddy** is a user-friendly and secure bank API that simplifies financial management for developers. It provides seamless integration for accessing account balances, conducting fund transfers, retrieving transaction histories, and change the currency. With a simple documentation and easy-to-use endpoints, BudgetBuddy streamlines financial operations, making it an ideal tool for managing your budget effortlessly.

To get started with the BudgetBuddy API, follow these installation steps:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/budgetbuddy-api.git
```

### 2. Install dependencies

Install the necessary dependencies to your local machine using the following command:

```bash
npm install
```

### 3. Setup environmental variables

Make a new file and name it ```.env``` and complete your environmental variables:

```bash
POSTGRES_HOST= // hostname
POSTGRES_USER= // username
POSTGRES_PASSWORD= // password
POSTGRES_DB= // database name
POSTGRES_PORT= // port
JWT_SECRET= // your token
```

### 4. Start Docker

Start Docker with the following command:

```bash
docker-compose up -d
```

### 5. Start API

Then start your API with this command:

```bash
npm run start:dev
```

Now you're good to go! :tada:
