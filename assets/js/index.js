const classA = 8;
const classB = 16;
const classC = 24;

let octets = [];

function getIpClass(octet) {
    if (octet >= 0 && octet <= 127) {
        return 'A';
    } else if (octet >= 128 && octet <= 191) {
        return 'B';
    } else if (octet >= 192 && octet <= 223) {
        return 'C';
    }
}

function getNetBits(IpClass) {
    if (IpClass === 'A') {
        return classA;
    } else if (IpClass === 'B') {
        return classB;
    } else if (IpClass === 'C') {
        return classC;
    }
}
function findSubnetMask(subnetBits) {
let subnetMask = '';
    for (let i = 0; i < 32; i++) {
        if (i < subnetBits) {
            subnetMask += '1';
        } else {
            subnetMask += '0';
        }
    }
    console.log(subnetMask);
    return subnetMask.match(/.{1,8}/g).map(part => parseInt(part, 2)).join('.');

}

$('#btnProcess').on('click', function () {
    let ip = '130.168.1.2';
    let prefix = 21;
    let ipArray = ip.split('.');
    octets.push(ipArray[0], ipArray[1], ipArray[2], ipArray[3]);
    //ipClass
    let IpClass = getIpClass(octets[0]);
    console.log(IpClass);
    //netBits
    let netBits = getNetBits(IpClass);
    console.log(netBits)
    //subNetBits
    let subNetBits = prefix - netBits;
    console.log(subNetBits)
    //hostBits
    let hostBits = 32 - prefix;
    //num of subnets
    let numOfSubnets = Math.pow(2, subNetBits) === 1 ? 'no subnets' : Math.pow(2, subNetBits);
    //broadcast address
    let broadcastAddress = '';
    console.log(numOfSubnets);

    console.log(findSubnetMask(prefix));

});