console.log('Start Operation');

function Sleep(milisecond) {
    let startTime = new Date().getTime();
    console.log('Opration is running');
    while (new Date().getTime() < startTime + milisecond) {
        console.log('in progress');
    }
    console.log('opration is done !!');
}
Sleep(1000);

console.log('Do something else...');