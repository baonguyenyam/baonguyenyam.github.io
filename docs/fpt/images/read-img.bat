@echo off
for /r %%i in (*.png,*.jpg,*.svg,*.bmp,*.gif,*.jpeg) do echo %%i >> list-files.txt
