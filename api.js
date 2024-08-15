let map;
let markers = [];
let rectangle;



let customers = [
    { code: 'C001', title: 'Apple Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Tim Cook', revenue: 365000000000, profit: 86000000000 },
    { code: 'C002', title: 'Microsoft Corp.', lat: 47.6062, lng: -122.3321, type: 'Yerli', name: 'Satya Nadella', revenue: 168000000000, profit: 61000000000 },
    { code: 'C003', title: 'Google LLC', lat: 37.4219, lng: -122.0848, type: 'Yerli', name: 'Sundar Pichai', revenue: 280000000000, profit: 76000000000 },
    { code: 'C004', title: 'Amazon.com Inc.', lat: 47.6062, lng: -122.3321, type: 'Yerli', name: 'Andy Jassy', revenue: 470000000000, profit: 33000000000 },
    { code: 'C005', title: 'Facebook Inc.', lat: 37.4847, lng: -122.1484, type: 'Yerli', name: 'Mark Zuckerberg', revenue: 117000000000, profit: 39000000000 },
    { code: 'C006', title: 'Tesla Inc.', lat: 34.0522, lng: -118.2437, type: 'Yerli', name: 'Elon Musk', revenue: 81400000000, profit: 12400000000 },
    { code: 'C007', title: 'Intel Corp.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Pat Gelsinger', revenue: 79800000000, profit: 20000000000 },
    { code: 'C008', title: 'IBM Corp.', lat: 41.8369, lng: -87.6847, type: 'Yerli', name: 'Arvind Krishna', revenue: 57400000000, profit: 5000000000 },
    { code: 'C009', title: 'Oracle Corp.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Safra Catz', revenue: 42000000000, profit: 12000000000 },
    { code: 'C010', title: 'SAP SE', lat: 49.0069, lng: 8.4037, type: 'Yabancı', name: 'Christian Klein', revenue: 31000000000, profit: 5000000000 },
    { code: 'C011', title: 'Salesforce.com Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Marc Benioff', revenue: 30000000000, profit: 4000000000 },
    { code: 'C012', title: 'Adobe Inc.', lat: 33.8688, lng: -117.9561, type: 'Yerli', name: 'Shantanu Narayen', revenue: 15500000000, profit: 4000000000 },
    { code: 'C013', title: 'Uber Technologies Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Dara Khosrowshahi', revenue: 17500000000, profit: -18000000000 },
    { code: 'C014', title: 'Netflix Inc.', lat: 34.0522, lng: -118.2437, type: 'Yerli', name: 'Reed Hastings', revenue: 31000000000, profit: 5000000000 },
    { code: 'C015', title: 'Spotify Technology S.A.', lat: 59.3293, lng: 18.0686, type: 'Yabancı', name: 'Daniel Ek', revenue: 12000000000, profit: -300000000 },
    { code: 'C016', title: 'PayPal Holdings Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Dan Schulman', revenue: 27000000000, profit: 4300000000 },
    { code: 'C017', title: 'Square Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Jack Dorsey', revenue: 18000000000, profit: -500000000 },
    { code: 'C018', title: 'Zoom Video Communications Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Eric Yuan', revenue: 4000000000, profit: 1000000000 },
    { code: 'C019', title: 'Snap Inc.', lat: 34.0522, lng: -118.2437, type: 'Yerli', name: 'Evan Spiegel', revenue: 4400000000, profit: -1000000000 },
    { code: 'C020', title: 'Twitter Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Elon Musk', revenue: 5300000000, profit: -220000000 },
    { code: 'C021', title: 'eBay Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Elliott Management', revenue: 10000000000, profit: 2100000000 },
    { code: 'C022', title: 'Alibaba Group', lat: 39.9042, lng: 116.4074, type: 'Yabancı', name: 'Daniel Zhang', revenue: 109000000000, profit: 20000000000 },
    { code: 'C023', title: 'Tencent Holdings Ltd.', lat: 22.5726, lng: 114.1694, type: 'Yabancı', name: 'Ma Huateng', revenue: 80000000000, profit: 25000000000 },
    { code: 'C024', title: 'Baidu Inc.', lat: 39.9042, lng: 116.4074, type: 'Yabancı', name: 'Robin Li', revenue: 17000000000, profit: 3000000000 },
    { code: 'C025', title: 'Huawei Technologies Co. Ltd.', lat: 22.5726, lng: 114.1694, type: 'Yabancı', name: 'Ren Zhengfei', revenue: 107000000000, profit: 8000000000 },
    { code: 'C026', title: 'Qualcomm Inc.', lat: 32.7157, lng: -117.1611, type: 'Yerli', name: 'Cristiano Amon', revenue: 24000000000, profit: 9000000000 },
    { code: 'C027', title: 'NVIDIA Corporation', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Jensen Huang', revenue: 32000000000, profit: 12000000000 },
    { code: 'C028', title: 'AMD Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Lisa Su', revenue: 21000000000, profit: 2000000000 },
    { code: 'C029', title: 'Texas Instruments Inc.', lat: 32.7767, lng: -96.7970, type: 'Yerli', name: 'Rich Templeton', revenue: 18000000000, profit: 4000000000 },
    { code: 'C030', title: 'Broadcom Inc.', lat: 33.0198, lng: -117.0316, type: 'Yerli', name: 'Hock Tan', revenue: 25000000000, profit: 5800000000 },
    { code: 'C031', title: 'ASML Holding N.V.', lat: 52.3731, lng: 4.8922, type: 'Yabancı', name: 'Peter Wennink', revenue: 18500000000, profit: 6000000000 },
    { code: 'C032', title: 'Siemens AG', lat: 48.1351, lng: 11.5820, type: 'Yabancı', name: 'Roland Busch', revenue: 60000000000, profit: 8000000000 },
    { code: 'C033', title: 'General Electric Co.', lat: 41.7381, lng: -73.9941, type: 'Yerli', name: 'H. Lawrence Culp', revenue: 74000000000, profit: 5000000000 },
    { code: 'C034', title: 'Honeywell International Inc.', lat: 33.4484, lng: -112.0740, type: 'Yerli', name: 'Darius Adamczyk', revenue: 36500000000, profit: 5000000000 },
    { code: 'C035', title: '3M Company', lat: 44.9778, lng: -93.2650, type: 'Yerli', name: 'Michael Roman', revenue: 35000000000, profit: 5000000000 },
    { code: 'C036', title: 'Caterpillar Inc.', lat: 40.7128, lng: -74.0060, type: 'Yerli', name: 'Jim Umpleby', revenue: 55000000000, profit: 6000000000 },
    { code: 'C037', title: 'Lockheed Martin Corp.', lat: 38.8951, lng: -77.0369, type: 'Yerli', name: 'James Taiclet', revenue: 74000000000, profit: 7000000000 },
    { code: 'C038', title: 'Boeing Co.', lat: 47.6062, lng: -122.3321, type: 'Yerli', name: 'David Calhoun', revenue: 76000000000, profit: 5000000000 },
    { code: 'C039', title: 'Northrop Grumman Corp.', lat: 34.0522, lng: -118.2437, type: 'Yerli', name: 'Kurt Sievers', revenue: 35000000000, profit: 4000000000 },
    { code: 'C040', title: 'Raytheon Technologies Corp.', lat: 41.7680, lng: -72.6691, type: 'Yerli', name: 'Gregory Hayes', revenue: 73000000000, profit: 5000000000 },
    { code: 'C041', title: 'General Dynamics Corp.', lat: 38.8977, lng: -77.0369, type: 'Yerli', name: 'Phebe Novakovic', revenue: 39000000000, profit: 3500000000 },
    { code: 'C042', title: 'L3 Technologies Inc.', lat: 32.7767, lng: -96.7970, type: 'Yerli', name: 'Michael Strianese', revenue: 10000000000, profit: 1200000000 },
    { code: 'C043', title: 'SAIC Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Nazzic Keene', revenue: 6000000000, profit: 800000000 },
    { code: 'C044', title: 'Hewlett Packard Enterprise Co.', lat: 30.2672, lng: -97.7431, type: 'Yerli', name: 'Antonio Neri', revenue: 29000000000, profit: 2000000000 },
    { code: 'C045', title: 'Dell Technologies Inc.', lat: 30.2672, lng: -97.7431, type: 'Yerli', name: 'Michael Dell', revenue: 90000000000, profit: 3000000000 },
    { code: 'C046', title: 'Cisco Systems Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Chuck Robbins', revenue: 55000000000, profit: 12000000000 },
    { code: 'C047', title: 'Juniper Networks Inc.', lat: 37.3947, lng: -122.1506, type: 'Yerli', name: 'Rami Rahim', revenue: 5100000000, profit: 200000000 },
    { code: 'C048', title: 'Arista Networks Inc.', lat: 37.3930, lng: -122.0838, type: 'Yerli', name: ' Jayshree Ullal', revenue: 2200000000, profit: 500000000 },
    { code: 'C049', title: 'NetSuite Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Jim McGeever', revenue: 2500000000, profit: 300000000 },
    { code: 'C050', title: 'Splunk Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Doug Merritt', revenue: 3500000000, profit: -100000000 },
    { code: 'C051', title: 'ServiceNow Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Bill McDermott', revenue: 6400000000, profit: 1500000000 },
    { code: 'C052', title: 'Atlassian Corp. Plc', lat: -33.8688, lng: 151.2093, type: 'Yabancı', name: 'Mike Cannon-Brookes', revenue: 3600000000, profit: 100000000 },
    { code: 'C053', title: 'Coupa Software Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Rob Bernshteyn', revenue: 700000000, profit: -50000000 },
    { code: 'C054', title: 'Workday Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Aneel Bhusri', revenue: 4500000000, profit: 200000000 },
    { code: 'C055', title: 'Snowflake Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Frank Slootman', revenue: 1400000000, profit: -500000000 },
    { code: 'C056', title: 'Palantir Technologies Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Alex Karp', revenue: 1900000000, profit: -150000000 },
    { code: 'C057', title: 'Elastic N.V.', lat: 52.3676, lng: 4.9041, type: 'Yabancı', name: 'Shay Banon', revenue: 600000000, profit: -70000000 },
    { code: 'C058', title: 'SAS Institute Inc.', lat: 35.7682, lng: -78.6382, type: 'Yerli', name: 'Jim Goodnight', revenue: 3400000000, profit: 900000000 },
    { code: 'C059', title: 'Tableau Software Inc.', lat: 47.6062, lng: -122.3321, type: 'Yerli', name: 'Adam Selipsky', revenue: 1200000000, profit: -50000000 },
    { code: 'C060', title: 'Qlik Technologies Inc.', lat: 40.7128, lng: -74.0060, type: 'Yerli', name: 'Mike Capone', revenue: 700000000, profit: 80000000 },
    { code: 'C061', title: 'HubSpot Inc.', lat: 42.3601, lng: -71.0589, type: 'Yerli', name: 'Yamini Rangan', revenue: 1600000000, profit: -50000000 },
    { code: 'C062', title: 'Zendesk Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Mikkel Svane', revenue: 1400000000, profit: -50000000 },
    { code: 'C063', title: 'Freshworks Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Girish Mathrubootham', revenue: 900000000, profit: -10000000 },
    { code: 'C064', title: 'Palo Alto Networks Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Nikesh Arora', revenue: 4000000000, profit: 800000000 },
    { code: 'C065', title: 'Check Point Software Technologies Ltd.', lat: 32.0853, lng: 34.7818, type: 'Yabancı', name: 'Gian Carlo Tagliaferro', revenue: 2200000000, profit: 700000000 },
    { code: 'C066', title: 'Fortinet Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Ken Xie', revenue: 3800000000, profit: 700000000 },
    { code: 'C067', title: 'McAfee Corp.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Peter Leav', revenue: 2800000000, profit: 600000000 },
    { code: 'C068', title: 'Sophos Group Plc', lat: 51.5094, lng: -0.1183, type: 'Yabancı', name: 'Sophie Cormack', revenue: 1000000000, profit: 200000000 },
    { code: 'C069', title: 'Trend Micro Inc.', lat: 35.6895, lng: 139.6917, type: 'Yabancı', name: 'Eva Chen', revenue: 2100000000, profit: 400000000 },
    { code: 'C070', title: 'Check Point Software Technologies Ltd.', lat: 32.0853, lng: 34.7818, type: 'Yabancı', name: 'Gil Shwed', revenue: 1700000000, profit: 500000000 },
    { code: 'C071', title: 'FireEye Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Kevin Mandia', revenue: 850000000, profit: -50000000 },
    { code: 'C072', title: 'CrowdStrike Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'George Kurtz', revenue: 1800000000, profit: 500000000 },
    { code: 'C073', title: 'Darktrace Ltd.', lat: 51.5074, lng: -0.1278, type: 'Yabancı', name: 'Poppy Gustafsson', revenue: 1200000000, profit: 400000000 },
    { code: 'C074', title: 'Imperva Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Pamela Kumar', revenue: 500000000, profit: -30000000 },
    { code: 'C075', title: 'A10 Networks Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Lee Chen', revenue: 400000000, profit: -10000000 },
    { code: 'C076', title: 'F5 Networks Inc.', lat: 47.6062, lng: -122.3321, type: 'Yerli', name: 'Françoise Brougher', revenue: 1700000000, profit: 200000000 },
    { code: 'C077', title: 'Netskope Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Sanjay Beri', revenue: 250000000, profit: -20000000 },
    { code: 'C078', title: 'Zscaler Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Jay Chaudhry', revenue: 400000000, profit: -15000000 },
    { code: 'C079', title: 'Qualys Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Phillip Dewolfe', revenue: 300000000, profit: -10000000 },
    { code: 'C080', title: 'Okta Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Todd McKinnon', revenue: 750000000, profit: 100000000 },
    { code: 'C081', title: 'Rapid7 Inc.', lat: 42.3601, lng: -71.0589, type: 'Yerli', name: 'Corey Thomas', revenue: 500000000, profit: -20000000 },
    { code: 'C082', title: 'Snyk Ltd.', lat: 51.5094, lng: -0.1183, type: 'Yabancı', name: 'Peter McKay', revenue: 250000000, profit: -10000000 },
    { code: 'C083', title: 'AppLovin Corp.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Adam Foroughi', revenue: 400000000, profit: -20000000 },
    { code: 'C084', title: 'Tenable Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Amit Yoran', revenue: 300000000, profit: -15000000 },
    { code: 'C085', title: 'Elastic N.V.', lat: 52.3676, lng: 4.9041, type: 'Yabancı', name: 'Shay Banon', revenue: 400000000, profit: -10000000 },
    { code: 'C086', title: 'Rapid7 Inc.', lat: 42.3601, lng: -71.0589, type: 'Yerli', name: 'Corey Thomas', revenue: 600000000, profit: 50000000 },
    { code: 'C087', title: 'Veracode Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Chris Wysopal', revenue: 220000000, profit: -5000000 },
    { code: 'C088', title: 'Claroty Inc.', lat: 40.7128, lng: -74.0060, type: 'Yerli', name: 'Amir Zilberstein', revenue: 150000000, profit: -20000000 },
    { code: 'C089', title: 'Vulcan Cyber Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Yaniv Balmas', revenue: 100000000, profit: -15000000 },
    { code: 'C090', title: 'AttackIQ Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Tomer Weingarten', revenue: 80000000, profit: -10000000 },
    { code: 'C091', title: 'Tufin Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Ruvi Kitov', revenue: 200000000, profit: -25000000 },
    { code: 'C092', title: 'Centrify Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Paddy Srinivasan', revenue: 100000000, profit: -15000000 },
    { code: 'C093', title: 'Armis Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Yevgeny Dik', revenue: 50000000, profit: -5000000 },
    { code: 'C094', title: 'Cato Networks Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Shlomo Kramer', revenue: 70000000, profit: -10000000 },
    { code: 'C095', title: 'Sumo Logic Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Ramin Sayar', revenue: 100000000, profit: -10000000 },
    { code: 'C096', title: 'Netwrix Corp.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Michael Johnson', revenue: 50000000, profit: -2000000 },
    { code: 'C097', title: 'Illumio Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Andrew Rubin', revenue: 200000000, profit: 10000000 },
    { code: 'C098', title: 'Menlo Security Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Rohit Gupta', revenue: 30000000, profit: -5000000 },
    { code: 'C099', title: 'Threat Stack Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Brian Ahern', revenue: 40000000, profit: -2000000 },
    { code: 'C100', title: 'Tenable Inc.', lat: 37.7749, lng: -122.4194, type: 'Yerli', name: 'Amit Yoran', revenue: 60000000, profit: -15000000 },
    { code: "C101", title: "Turkcell", lat: 41.0588, lng: 29.0353, type: "Yerli", name: "Kaan Yılmaz", revenue: 30000000000, profit: 4000000000 },
    { code: "C102", title: "Koç Holding", lat: 41.0485, lng: 30.0483, type: "Yerli", name: "Burcu Demir", revenue: 50000000000, profit: 6000000000 },
    { code: "C103", title: "Sabancı Holding", lat: 41.0464, lng: 29.0218, type: "Yerli", name: "Ali Arslan", revenue: 45000000000, profit: 5500000000 },
    { code: "C104", title: "Aselsan", lat: 39.9887, lng: 32.8501, type: "Yerli", name: "Emre Gül", revenue: 7000000000, profit: 1000000000 },
    { code: "C105", title: "Arçelik", lat: 41.0672, lng: 29.0260, type: "Yerli", name: "Seda Yurt", revenue: 15000000000, profit: 2000000000 },
    { code: "C106", title: "Türk Telekom", lat: 41.0485, lng: 29.0218, type: "Yerli", name: "Mert Yalçın", revenue: 10000000000, profit: 1500000000 },
    { code: "C107", title: "Vestel", lat: 41.0053, lng: 28.9590, type: "Yerli", name: "Ece Özdemir", revenue: 8000000000, profit: 1200000000 },
    { code: "C108", title: "Halkbank", lat: 39.9334, lng: 32.8597, type: "Yerli", name: "Ali Koç", revenue: 20000000000, profit: 2500000000 },
    { code: "C109", title: "Ziraat Bankası", lat: 39.9334, lng: 32.8597, type: "Yerli", name: "Oğuz Yılmaz", revenue: 25000000000, profit: 3000000000 },
    { code: "C110", title: "Eczacıbaşı", lat: 41.0542, lng: 28.9830, type: "Yerli", name: "Buse Can", revenue: 6000000000, profit: 800000000 }

    
];

// yeni eklendi 2 nokta arası da içinde var 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41, lng: 28.57 }, // Default center
        zoom: 10,
        mapTypeId: 'terrain'
    });
}

// Alanı Gösterme Fonksiyonu
function showAreaBetweenPoints(customers) {
    console.log(`Filtered Customers Length: ${customers.length}`);
    // Eski rectangle'ı kaldır
    if (rectangle) {
        rectangle.setMap(null);
    }

    if (filteredCustomers.length < 4) {
        alert("Rectangle çizebilmek için en az 4 müşteri noktası olmalı!");
        return;
    }
  


    const latitudes = customers.map(c => c.lat);
    const longitudes = customers.map(c => c.lng);

    const north = Math.max(...latitudes);
    const south = Math.min(...latitudes);
    const east = Math.max(...longitudes);
    const west = Math.min(...longitudes);

    console.log('Bounds:', { north, south, east, west });

    const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(south, west),
        new google.maps.LatLng(north, east)
    );

    // Önceki şekilleri temizleyin
    if (rectangle) {
        rectangle.setMap(null);
    }

    rectangle = new google.maps.Rectangle({
        bounds: bounds,
        editable: false,
        draggable: false,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
    });

    rectangle.setMap(map);

    // Haritayı bu dikdörtgene göre odakla
    map.fitBounds(bounds);
}
  




function loadMarkers(customers) {
    clearMarkers();
    customers.forEach(customer => {
        const marker = new google.maps.Marker({
            position: { lat: customer.lat, lng: customer.lng },
            map: map,
            title: customer.title
        });
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div>
                    <h2>${customer.title}</h2>
                    <p>Şirket Kodu: ${customer.code}</p>
                    <p>Ceo: ${customer.name}</p>
                    <p>Şirket: ${customer.title}</p>
                    <p>Ciro: ${customer.revenue}</p>
                    <p>Kar: ${customer.profit}</p>
                    <p>Tür: ${customer.type}</p>
                </div>
            `
        });
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
        markers.push(marker);
    });
}

function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
}



function filterCustomers() {
    
    const revenue = document.getElementById('ciro').value;
    const company_code = document.getElementById('sirket_kodu').value.toLowerCase();
    const title = document.getElementById('sirket').value.toLowerCase();
    const name = document.getElementById('adi').value.toLowerCase();
    const type = document.getElementById('yerli').value.toLowerCase();
   
    markers.forEach(marker => marker.setMap(null)); // Önceki işaretçileri kaldır

    let filteredCustomers = customers.filter(customer => {
        return (!revenue || customer.revenue >= revenue) &&
               (!company_code || customer.code.toLowerCase().includes(company_code)) &&
               (!title || customer.title.toLowerCase().includes(title)) &&
               (!name || customer.name.toLowerCase().includes(name)) &&
               (!type || customer.type.toLowerCase().includes(type));
               
    });
    // Konsola filtrelenmiş müşterileri yazdır
    console.log("Filtrelenmiş müşteriler:", filteredCustomers);
    
    // Tekilleştirme işlemini yap
    filteredCustomers = removeDuplicateCompanies(filteredCustomers);

    // Konsola tekilleştirilmiş müşterileri yazdır
    console.log("Tekilleştirilmiş müşteriler:", filteredCustomers);

    loadMarkers(filteredCustomers);
    document.getElementById('info').innerText = `${filteredCustomers.length} kayıt bulundu`; // ne kadar sonuç bulduğunu bulur ve kullanıcıya arayüzde gösterir
    
    
    // Update the map with the filtered customers
    updateMapWithFilteredCustomers(filteredCustomers);
    

}



function getBounds(filteredCustomers) {
    if (filteredCustomers.length === 0) return null;

    let latMin = Infinity, latMax = -Infinity, lngMin = Infinity, lngMax = -Infinity;

    filteredCustomers.forEach(customer => {
        if (customer.lat < latMin) latMin = customer.lat;
        if (customer.lat > latMax) latMax = customer.lat;
        if (customer.lng < lngMin) lngMin = customer.lng;
        if (customer.lng > lngMax) lngMax = customer.lng;
    });

    return {
        north: latMax,
        south: latMin,
        east: lngMax,
        west: lngMin
    };
}

function updateMapWithFilteredCustomers(filteredCustomers) {
    if (rectangle) {
        rectangle.setMap(null);
    }

    const bounds = getBounds(filteredCustomers);
    if (!bounds) return;

    rectangle = new google.maps.Rectangle({
        bounds: {
            north: bounds.north,
            south: bounds.south,
            east: bounds.east,
            west: bounds.west
        },
        editable: false,
        draggable: false,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
    });

    rectangle.setMap(map);
    const boundsObj = new google.maps.LatLngBounds(
        new google.maps.LatLng(bounds.south, bounds.west),
        new google.maps.LatLng(bounds.north, bounds.east)
    );
    map.fitBounds(boundsObj);
}





// Şirket verilerini al
// Global olarak tanımlama
window.customers = JSON.parse(localStorage.getItem('customers')) || [];


// Şirket oluşturma fonksiyonu
function createCompany() {
    const code = document.getElementById('code').value;
    const title = document.getElementById('title').value;
    const lat = parseFloat(document.getElementById('lat').value);
    const lng = parseFloat(document.getElementById('lng').value);
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const revenue = parseFloat(document.getElementById('revenue').value);
    const profit = parseFloat(document.getElementById('profit').value);

    if (!code || !title || isNaN(lat) || isNaN(lng) || !type || !name || isNaN(revenue) || isNaN(profit)) {
        alert('Lütfen tüm alanları doğru şekilde doldurduğunuzdan emin olun.');
        return;
    }

    const newCompany = { code, title, lat, lng, type, name, revenue, profit };
    customers.push(newCompany);

    // Yerel depolamaya kaydet
    localStorage.setItem('customers', JSON.stringify(customers));

    alert('Şirket başarıyla oluşturuldu.');
    document.querySelector('.filter-container').reset();

    
}

// Sayfa yüklendiğinde verileri yükleyin
document.addEventListener('DOMContentLoaded', () => {
    const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    customers.push(...storedCustomers);
});




// arkaplan siyah veya beyaz yap

function setLightMode() {
    document.getElementById('theme-stylesheet').setAttribute('href', 'light-mode.css');
    saveThemePreference('light');
}

function setDarkMode() {
    document.getElementById('theme-stylesheet').setAttribute('href', 'dark-mode.css');
    saveThemePreference('dark');
}

// Varsayılan tema ayarı
document.addEventListener('DOMContentLoaded', () => {
    // Kullanıcının önceki tercihlerini kontrol et
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
});

// Tema değişikliklerini kaydet
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}


// Modal yönetim kodları
var filterModal = document.getElementById("filterModal");
var createCompanyModal = document.getElementById("createCompanyModal");
var deleteCompanyModal = document.getElementById("deleteCompanyModal");

var filterBtn = document.getElementById("openFilterModal");
var createCompanyBtn = document.getElementById("openCreateCompanyModal");
var deleteCompanyBtn = document.getElementById("openDeleteCompanyModal");        

var filterSpan = document.getElementById("filterClose");
var createCompanySpan = document.getElementById("createCompanyClose");
var deleteCompanySpan = document.getElementById("deleteCompanyClose");

filterBtn.onclick = function() {
    filterModal.style.display = "block";
}

createCompanyBtn.onclick = function() {
    createCompanyModal.style.display = "block";
}

deleteCompanyBtn.onclick = function() {
    deleteCompanyModal.style.display = "block";
}




filterSpan.onclick = function() {
    filterModal.style.display = "none";
}

createCompanySpan.onclick = function() {
    createCompanyModal.style.display = "none";
}

deleteCompanySpan.onclick = function() {
    deleteCompanyModal.style.display = "none";
}




window.onclick = function(event) {
    if (event.target == filterModal) {
        filterModal.style.display = "none";
    }
    if (event.target == createCompanyModal) {
        createCompanyModal.style.display = "none";
    }
    if (event.target == deleteCompanyModal) {
        deleteCompanyModal.style.display = "none";
    }
   
}




function deleteCompany() {
    const code = document.getElementById('delete_sirket_kodu').value.trim();

    if (code === "") {
        alert('Şirket kodunu girmeniz gerekiyor.');
        return;
    }

    const index = customers.findIndex(customer => customer.code === code);

    if (index !== -1) {
        customers.splice(index, 1); // Şirketi diziden sil
        localStorage.setItem('customers', JSON.stringify(customers));
        alert('Şirket başarıyla silindi.');

        // Haritadaki marker'ları güncelle
        clearMarkers(); // Mevcut marker'ları temizle
        // loadMarkers(customers); 

        // if (customers.length > 0) {
        //     updateMapWithFilteredCustomers(customers);
        // }

        document.getElementById('delete_sirket_kodu').value = ''; 
    } else {
        alert('Bu koda sahip bir şirket bulunamadı.');
    }
}


// Silme butonunun click event'ini dinle
document.getElementById('deleteCompanyButton').addEventListener('click', deleteCompany);






function displayCustomersInPopup(customers, shape) {
    let popupContent = '<h2>Seçilen Alandaki Müşteriler</h2>';
    if (customers.length === 0) {
        popupContent += '<p>Bu alan içinde müşteri yok.</p>';
    } else {
        popupContent += '<table>';
        popupContent += '<tr><th>Şirket Kodu</th><th>Şirket Adı</th><th>CEO</th><th>Ciro</th><th>Kâr</th><th>Tür</th></tr>';
        customers.forEach(customer => {
            popupContent += `<tr><td>${customer.code}</td><td>${customer.title}</td><td>${customer.name}</td><td>${customer.revenue}</td><td>${customer.profit}</td><td>${customer.type}</td></tr>`;
        });
        popupContent += '</table>';
    }

    // Bilgi penceresinin pozisyonunu ayarla
    const position = shape.type === google.maps.drawing.OverlayType.CIRCLE
        ? shape.getCenter()
        : shape.type === google.maps.drawing.OverlayType.RECTANGLE
        ? shape.getBounds().getCenter()
        : shape.getPath().getArray()[0];

    // Popup göster
    const infoWindow = new google.maps.InfoWindow({
        content: popupContent,
        position: selectedShape.getBounds ? selectedShape.getBounds().getCenter() : selectedShape.getPath().getArray()[0]
    });

    infoWindow.open(map);

    // Popup kapatıldığında şekli temizle
    google.maps.event.addListener(infoWindow, 'closeclick', function() {
        if (selectedShape) {
            selectedShape.setMap(null); // Şekli kaldır
            selectedShape = null; // Seçili şekli temizle
        }
    });
}


function showCustomersInShape(shape) {
    let insideCustomers = [];
    const shapeType = shape.type;
    const addedCodes = new Set(); // Eklenecek müşteri kodlarını takip etmek için

    customers.forEach(customer => {
        const latLng = new google.maps.LatLng(customer.lat, customer.lng);

        // Eğer müşteri zaten eklendiyse, atla
        if (addedCodes.has(customer.code)) return;

        if (shapeType === google.maps.drawing.OverlayType.CIRCLE) {
            const circleCenter = shape.getCenter();
            const radius = shape.getRadius();
            if (google.maps.geometry.spherical.computeDistanceBetween(circleCenter, latLng) <= radius) {
                insideCustomers.push(customer);
            }
        } else if (shapeType === google.maps.drawing.OverlayType.RECTANGLE) {
            if (shape.getBounds().contains(latLng)) {
                insideCustomers.push(customer);
            }
        } else if (shapeType === google.maps.drawing.OverlayType.POLYGON) {
            if (google.maps.geometry.poly.containsLocation(latLng, shape)) {
                insideCustomers.push(customer);
            }
        }
    });

    insideCustomers = removeDuplicateCompanies(insideCustomers);

    displayCustomersInPopup(insideCustomers, shape);
}

function removeDuplicateCompanies(customers) {
    const uniqueCustomers = customers.filter((customer, index, self) => 
        index === self.findIndex((c) => (
            c.code === customer.code // Şirket koduna göre tekilleştirme
        ))
    );
    return uniqueCustomers;
}

let drawingManager;
let selectedShape;

function initDrawingManager() {

    // Önceki DrawingManager'ı kaldır
    if (drawingManager) {
        drawingManager.setMap(null);
    }
    
    drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: null,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['polygon', 'circle', 'rectangle']
        },
        circleOptions: {
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1
        },
        rectangleOptions: {
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1
        },
        polygonOptions: {
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1
        }
    });
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
        if (selectedShape) {
            selectedShape.setMap(null); // Önceki şekli kaldır
        }
        selectedShape = event.overlay;
        selectedShape.type = event.type; // Şekil türünü ayarla

        showCustomersInShape(selectedShape);
    });
}

document.getElementById('startSelectionButton').onclick = function() {
    initDrawingManager();
};



// Butona tıklama olayına bağlama
document.getElementById('filterButton').addEventListener('click', () => {
    const filteredCustomers = filterCustomers();
    updateMapWithFilteredCustomers(filteredCustomers);
    showAreaBetweenPoints(filteredCustomers); // Tek dikdörtgen çizilmesi için bu satırı kaldırabilirsiniz.
});


document.getElementById('openFilterModal').addEventListener('click', filterCustomers);

// Google Maps API yüklenirken initMap fonksiyonunu çağırmak için
window.initMap = initMap;

