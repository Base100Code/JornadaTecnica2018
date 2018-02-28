
Unzip file in C:\ and install jdk 1.8 32 bits and and define in the system variable PATH
( p.e. c:\Program Files (x86)\jre1.8.0_144\bin\client\)


The following configuration files must be checked:


1.- File COSMOSDIR\etc\cosmoswebserver.ini 
	INIFILE=COSMOSDIR\etc\cwsdemo.ini

2.- Cwsdemo.ini
	2.a) Change in file cwsdemo.ini the next path 
		Djava.class.path=c:\\cosmos71\\bin\\cosmoswebserver.jar;
	
	2.b) If the file was not unzipped in the root directory (c:\) You should review the path of the environment variables:
	CONFIG and RESOURCEPATH

	2.c) By the default the Port in this configuración is 8080. 
	If you are already using this port you should change the value of the PORT variable if you 

3.- In the directory c:\Jornadas\demorest\ there are 4 file bat to install/start/stop/remove the service Windows
	installCosmosWebserver.bat 
	startCosmosWebserver.bat 
	stopCosmosWebserver.bat 
	removeCosmosWebserver.bat 


4.- URL localhost:8080/stock/index.html