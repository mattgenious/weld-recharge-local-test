# Weld recharge local test util

This project sets up a local testing environment to work with Weld's recharge community-connectors. It utilizes a public repository from Weld, enabling you to create custom connectors and test them locally.

## Getting Started

Follow these instructions to set up the local environment on your machine.

### Forking Weld's Community-Connectors Repository

1. Navigate to [Weld's community-connectors repository](https://github.com/WeldHQ/community-connectors).
2. Click on the "Fork" button at the top right corner.
3. Select your GitHub account to create a fork of the repository.

### Cloning This Repository

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/weld-recharge-local-test.git
   cd project-repo
   ```

### Updating Submodule Path

1. Change the URL of the submodule to point to your fork:
   ```bash
   git submodule deinit community-connectors
   git rm community-connectors
   git submodule add https://github.com/your-username/community-connectors.git community-connectors
   git commit -m "Updated submodule path"
   git push
   ```

## Environment and auth Setup

To ensure secure access to the server, an authorization mechanism is implemented using a Bearer token. Follow these steps to set up authorization:
The `WELD_API_KEY` can be any placeholder value as long as it is the same in the .env file and the authorization header.

### 1. Environment Variable Configuration:

   - Create a `.env` file in the root directory of the project.
   - Add your API keys to the `.env` file:
     ```plaintext
     RECHARGE_API_KEY=your_recharge_api_key_here
     WELD_API_KEY=your_weld_api_key_here
     ```

### 2. Postman Configuration:
   - When making requests to your server using Postman, you'll need to include the `WELD_API_KEY` as a Bearer token in the `authorization` header.
   - In Postman, select the **Headers** tab in your request configuration.
   - Set the key as `authorization` and the value as `Bearer YOUR_WELD_API_KEY`.

### 3. Testing Authorization:
   - With the `WELD_API_KEY` environment variable set and the `authorization` header configured in Postman, you should be able to make authorized requests to your server.
   - If the token is incorrect, you'll receive a "Not authorized" error response.

Ensure that the `WELD_API_KEY` value is kept secure and not shared publicly to maintain the security of your server.


## Running the Project

1. Install the necessary packages:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

### Testing with Postman

1. Download and install [Postman](https://www.postman.com/).
2. Create a new request in Postman with the method and URL matching your local server (e.g., POST `http://localhost:3000`).
3. Send the request and observe the response from your server.

## Contributing

Feel free to create issues or submit pull requests. Ensure to update your fork and test locally before submitting any changes.

Replace placeholders like `your-username` and `your_api_key_here` with the actual values.
