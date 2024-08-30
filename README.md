# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Editing your own Abstract

You can edit your abstract yourself if you have a GitHub account.
Please navigate to the directory containing the abstracts, and click on the file you want to edit:
https://github.com/NFDI4Chem/ConsortiumMeeting-5_0-abstracts/tree/main/docs/20_posters


| Step                                                          | image | 
| --------------------------------------------------------------|:-----:|
| Hit the pencil icon (or use the keyboard shortcut `e`) to edit: | ![image](https://github.com/user-attachments/assets/85bae6ca-a020-4072-aaa9-374869cc7973)                  | 
| Most likely GitHub will ask you to fork the abstracts repository, which is fine: | ![image](https://github.com/user-attachments/assets/9cbcf707-0479-4801-b9ef-b26c37bd2c01) | 
| When done with edits, save (or, in GitHub language: commit) your changes. | ![image](https://github.com/user-attachments/assets/46debbb2-435c-425a-a220-5237d788f271)        | 
| A "Propose Changes" dialog will pop up, where you can briefly describe your changes: | ![image](https://github.com/user-attachments/assets/c829ee51-140c-4edb-85d4-b909c0d8bacf) | 
| Last step is to send us a message containing your edits and the brief description end finish the process with the greenbutton: | ![image](https://github.com/user-attachments/assets/ef471f65-adae-4486-a4e5-8f4e50f6f329) |


We will then glance over the proposed changes, and accept if things look good. 
If this scares you, just send us meeting organisers a classic mail with the changes you need. 

----------------------

The following instructions are not for authors, but only for developers of the website.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
