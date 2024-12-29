# Integrating Bootstrap with React

This is the repo for the Integrating Bootstrap with React assignment.

To run this on your local machine, you will need to have Node.js installed.  Additionally, you will need to have keys to the Marvel API, which you can get for free [here](https://developer.marvel.com/).  In your terminal, run the following commands:
```bash
    git clone https://github.com/schnretzl/integrating-bootstrap-with-react.git
    cd integrating-bootstrap-with-react
    npm install
```

You will need to generate a MD5 hash from your Marvel API keys. You can generate this hash [here](https://www.md5hashgenerator.com/).  For the string, use a combination of '1+\<PRIVATE KEY>+\<PUBLIC KEY>.  So for example, if your private key is '1234' and your public key is 'abcd', generate an MD5 hash of the string '11234abcd'.

In the project, create a file at the root level (same level as the file package.json) named '.env'.  In this file, you will store your public key and hash as variables.  They should be named as such:
```
    VITE_PUBLIC_KEY = '1234'
    VITE_HASH = 'ABCD'
```

Once you have created this file, run this command in terminal:

```bash
    npm run dev
```

This will start the server, and a link to the project should show up in your terminal.  Open that link in your browser to view the project.