if (true) {
    console.log('Always execute.');
}

if (false || true) {
    console.log('Never execute.');
}

/*--------------------------------------*/
let x: number = 10, y = 20;

x > y? console.log('Yes'): console.log('No');

/*----------------------------------*/
let selectMenu: number = 2;

switch(selectMenu) {
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
}