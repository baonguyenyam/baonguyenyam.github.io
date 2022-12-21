#!/bin/sh
show_menu(){
    normal=`echo "\033[m"`
    menu=`echo "\033[36m"` #Blue
    number=`echo "\033[33m"` #yellow
    bgred=`echo "\033[41m"`
    fgred=`echo "\033[31m"`
    printf "\n${menu}*********************************************${normal}\n"
    printf "${menu}NGUYEN MENU${normal}"
    printf "\n${menu}*********************************************${normal}\n"
    printf "${menu}**${number} 1)${menu} RUN DEV ${normal}\n"
    printf "${menu}**${number} 2)${fgred} BUILD ${normal}\n"
    printf "${menu}**${number} 3) ${bgred}RUN LINT${normal}\n"
    printf "${menu}**${number} 4) ${normal}RUN SERVER${normal}\n"
    # printf "${menu}*********************************************${normal}\n"
    printf "Please enter a menu option and enter or ${fgred}x to exit. ${normal}"
    read opt
}

option_picked(){
    msgcolor=`echo "\033[01;32m"` # bold red
    normal=`echo "\033[00;00m"` # normal white
    message=${@:-"${normal}Error: No message passed"}
    printf "${msgcolor}${message}${normal}\n"
}

clear
show_menu
while [ $opt != '' ]
    do
    if [ $opt = '' ]; then
      exit;
    else
      case $opt in
        1) clear;
            option_picked "Starting App...";
            npm run dev;
            show_menu;
        ;;
        2) clear;
            option_picked "Building App...";
            npm run build;
            show_menu;
        ;;
        3) clear;
            option_picked "Running lint...";
            npm run lint;
            show_menu;
        ;;
        4) clear;
            option_picked "Start server...";
			npm run serve;
            show_menu;
        ;;
        
        x)exit;
        ;;
        \n)exit;
        ;;
        *)clear;
            option_picked "Pick an option from the menu";
            show_menu;
        ;;
      esac
    fi
done
