# Einrichtung der Entwicklungsumgebung

Vorrausetzungen
- LinuxSubsystem Ubuntu  (wsl2)
- Node version Manager (nvm)
- Gulp
- YeomanGenerator


## Installation Linux Subsystem
```powershell
    wsl --install
    wsl --set-default-version 2
    wsl --install -d ubuntu
```

Danach kann man Ubuntu nun über die Schnellstartleiste Starten



Ressourcen :
- https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview (Subsystem installation)
- https://docs.microsoft.com/de-de/windows/wsl/install

## Installation Node Version Manager auf dem Subsystem

```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

oder

```bash 
    wget -qO- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh> | bash
 ```

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```


Nach der installation ist eventuell ein erneutes aufrufen der  Shell nötig um das Kommando (nvm) benutzen zu können.

```bash
    nvm install 14.15.0
```

Ressourcen :

- <https://github.com/nvm-sh/nvm>



## Installation globaler NPM packages im Subsystem

```bash
    npm install gulp-cli yo @microsoft/generator-sharepoint --global
```

Resourcen : 
- https://docs.microsoft.com/de-de/sharepoint/dev/spfx/set-up-your-development-environment


## Erstellen eines SPFX-Projektes

Erstelle auf dem Linuxsubsystem einen Ordner für dein Projekt (die Projekt "Root").

```bash
    cd [AppRootVerzeichniss]
    yo @microsoft/sharepoint
```

Dies erstellt die Frameworkbasis und die dazugehörige Verzeichnissstruktur.


# Das Starten der App

- Öffne die Ubuntushell und öffne  über diese Shell VS-Code im Projektverzeichis
- Dann im VS-Codeterminal `nvm use 14.15.0`
- `npm install` wenn noch nicht gemacht
- `gulp serve` zum starten der App


# Entwicklung

Dokumentationen
- SPFX MS GraphClient https://www.npmjs.com/package/@microsoft/microsoft-graph-client

Nützliche links zum Verwalten der Applikation und ihrem deployment

- https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps> (ActiveDirectory)
- https://smsmedipoolag.sharepoint.com/sites/appcatalog/AppCatalog/Forms/AllItems.aspx (Hochladen/Deployment der Applikation)
- <https://smsmedipoolag-admin.sharepoint.com/_layouts/15/online/AdminHome.aspx#/webApiPermissionManagement> (Berechtigungen/Genehmigungen von der App)

 MS Listen
- https://smsmedipoolag.sharepoint.com/sites/intranet/Lists/Urlaub/AllItems.aspx?env=WebViewList (UserTage)



Intranet Links

- https://smsmedipoolag.sharepoint.com/sites/intranet (Haubseite [ms HubSeite])
- https://smsmedipoolag.sharepoint.com/sites/QM2 (QM Seite)
- https://smsmedipoolag.sharepoint.com/sites/Betriebsrat2 (Betriebsrat)
- https://smsmedipoolag.sharepoint.com/sites/HR2 (HR)
