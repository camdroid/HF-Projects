#!/bin/bash
echo Please enter the project name
read NAME
echo Hi $NAME

mkdir $NAME
cd $NAME
touch index.html
touch main.css

echo ""
