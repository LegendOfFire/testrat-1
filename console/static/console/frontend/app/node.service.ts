
import { Injectable } from '@angular/core';

import { Node } from './node';

const mockNodes : Node[] = 
[
   {
      "cells" : [],
      "oamIp" : "10.186.137.101",
      "enbId" : "101",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "102",
      "oamIp" : "10.186.137.102",
      "cells" : []
   },
   {
      "enbId" : "103",
      "boards" : [],
      "oamIp" : "10.186.137.103",
      "cells" : []
   },
   {
      "enbId" : "104",
      "boards" : [],
      "oamIp" : "10.186.137.104",
      "cells" : []
   },
   {
      "enbId" : "105",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.105"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.106",
      "boards" : [],
      "enbId" : "106"
   },
   {
      "enbId" : "107",
      "boards" : [],
      "oamIp" : "10.186.137.107",
      "cells" : []
   },
   {
      "enbId" : "108",
      "boards" : [],
      "oamIp" : "10.186.137.108",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.109",
      "cells" : [],
      "boards" : [],
      "enbId" : "109"
   },
   {
      "enbId" : "110",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.110"
   },
   {
      "oamIp" : "10.186.137.111",
      "cells" : [],
      "boards" : [],
      "enbId" : "111"
   },
   {
      "oamIp" : "10.186.137.112",
      "cells" : [],
      "boards" : [],
      "enbId" : "112"
   },
   {
      "enbId" : "113",
      "boards" : [],
      "oamIp" : "10.186.137.113",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.114",
      "cells" : [],
      "boards" : [],
      "enbId" : "114"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.115",
      "enbId" : "115",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "116",
      "oamIp" : "10.186.137.116",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.117",
      "cells" : [],
      "boards" : [],
      "enbId" : "117"
   },
   {
      "oamIp" : "10.186.137.118",
      "cells" : [],
      "boards" : [],
      "enbId" : "118"
   },
   {
      "boards" : [],
      "enbId" : "119",
      "oamIp" : "10.186.137.119",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.120",
      "cells" : [],
      "boards" : [],
      "enbId" : "120"
   },
   {
      "oamIp" : "10.186.137.121",
      "cells" : [],
      "enbId" : "121",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.122",
      "cells" : [],
      "enbId" : "122",
      "boards" : []
   },
   {
      "enbId" : "123",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.123"
   },
   {
      "enbId" : "124",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.124"
   },
   {
      "oamIp" : "10.186.137.125",
      "cells" : [],
      "enbId" : "125",
      "boards" : []
   },
   {
      "enbId" : "126",
      "boards" : [],
      "oamIp" : "10.186.137.126",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.127",
      "cells" : [],
      "enbId" : "127",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.128",
      "enbId" : "128",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.129",
      "enbId" : "129",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.130",
      "cells" : [],
      "enbId" : "130",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.131",
      "boards" : [],
      "enbId" : "131"
   },
   {
      "boards" : [],
      "enbId" : "132",
      "oamIp" : "10.186.137.132",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "133",
      "oamIp" : "10.186.137.133",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.134",
      "cells" : [],
      "enbId" : "134",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "135",
      "cells" : [],
      "oamIp" : "10.186.137.135"
   },
   {
      "boards" : [],
      "enbId" : "136",
      "cells" : [],
      "oamIp" : "10.186.137.136"
   },
   {
      "boards" : [],
      "enbId" : "137",
      "oamIp" : "10.186.137.137",
      "cells" : []
   },
   {
      "enbId" : "138",
      "boards" : [],
      "oamIp" : "10.186.137.138",
      "cells" : []
   },
   {
      "enbId" : "139",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.139"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.140",
      "enbId" : "140",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.141",
      "cells" : [],
      "enbId" : "141",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.142",
      "cells" : [],
      "boards" : [],
      "enbId" : "142"
   },
   {
      "oamIp" : "10.186.137.143",
      "cells" : [],
      "enbId" : "143",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.144",
      "cells" : [],
      "enbId" : "144",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "145",
      "oamIp" : "10.186.137.145",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.146",
      "cells" : [],
      "boards" : [],
      "enbId" : "146"
   },
   {
      "boards" : [],
      "enbId" : "147",
      "cells" : [],
      "oamIp" : "10.186.137.147"
   },
   {
      "oamIp" : "10.186.137.148",
      "cells" : [],
      "boards" : [],
      "enbId" : "148"
   },
   {
      "enbId" : "149",
      "boards" : [],
      "oamIp" : "10.186.137.149",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "",
      "oamIp" : "",
      "cells" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.150",
      "boards" : [],
      "enbId" : "150"
   },
   {
      "boards" : [],
      "enbId" : "151",
      "oamIp" : "10.186.137.151",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "152",
      "oamIp" : "10.186.137.152",
      "cells" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.153",
      "boards" : [],
      "enbId" : "153"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.154",
      "boards" : [],
      "enbId" : "154"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.155",
      "boards" : [],
      "enbId" : "155"
   },
   {
      "enbId" : "156",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.156"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.157",
      "enbId" : "157",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.158",
      "enbId" : "158",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.159",
      "boards" : [],
      "enbId" : "159"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.160",
      "boards" : [],
      "enbId" : "160"
   },
   {
      "boards" : [],
      "enbId" : "161",
      "oamIp" : "10.186.137.161",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "162",
      "oamIp" : "10.186.137.162",
      "cells" : []
   },
   {
      "enbId" : "163",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.163"
   },
   {
      "boards" : [],
      "enbId" : "164",
      "oamIp" : "10.186.137.164",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.165",
      "cells" : [],
      "enbId" : "",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "",
      "cells" : [],
      "oamIp" : "10.186.137.166"
   },
   {
      "enbId" : "167",
      "boards" : [],
      "oamIp" : "10.186.137.167",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "168",
      "oamIp" : "10.186.137.168",
      "cells" : []
   },
   {
      "enbId" : "169",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.169"
   },
   {
      "enbId" : "170",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.170"
   },
   {
      "enbId" : "171",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.171"
   },
   {
      "boards" : [],
      "enbId" : "172",
      "oamIp" : "10.186.137.172",
      "cells" : []
   },
   {
      "enbId" : "173",
      "boards" : [],
      "oamIp" : "10.186.137.173",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "174",
      "oamIp" : "10.186.137.174",
      "cells" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.175",
      "boards" : [],
      "enbId" : "175"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.176",
      "enbId" : "176",
      "boards" : []
   },
   {
      "enbId" : "177",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.177"
   },
   {
      "oamIp" : "10.186.137.178",
      "cells" : [],
      "boards" : [],
      "enbId" : "178"
   },
   {
      "enbId" : "179",
      "boards" : [],
      "oamIp" : "10.186.137.179",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "180",
      "cells" : [],
      "oamIp" : "10.186.137.180"
   },
   {
      "enbId" : "181",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.181"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.182",
      "enbId" : "182",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "183",
      "cells" : [],
      "oamIp" : "10.186.137.183"
   },
   {
      "boards" : [],
      "enbId" : "184",
      "cells" : [],
      "oamIp" : "10.186.137.184"
   },
   {
      "boards" : [],
      "enbId" : "185",
      "cells" : [],
      "oamIp" : "10.186.137.185"
   },
   {
      "boards" : [],
      "enbId" : "186",
      "cells" : [],
      "oamIp" : "10.186.137.186"
   },
   {
      "enbId" : "187",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.187"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.188",
      "boards" : [],
      "enbId" : "188"
   },
   {
      "oamIp" : "10.186.137.189",
      "cells" : [],
      "boards" : [],
      "enbId" : "189"
   },
   {
      "oamIp" : "10.186.137.190",
      "cells" : [],
      "enbId" : "190",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.191",
      "enbId" : "191",
      "boards" : []
   },
   {
      "enbId" : "192",
      "boards" : [],
      "oamIp" : "10.186.137.192",
      "cells" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.193",
      "enbId" : "193",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.194",
      "cells" : [],
      "enbId" : "194",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "195",
      "cells" : [],
      "oamIp" : "10.186.137.195"
   },
   {
      "oamIp" : "10.186.137.196",
      "cells" : [],
      "enbId" : "196",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "197",
      "oamIp" : "10.186.137.197",
      "cells" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.198",
      "boards" : [],
      "enbId" : "198"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.199",
      "boards" : [],
      "enbId" : "199"
   },
   {
      "boards" : [],
      "enbId" : "200",
      "oamIp" : "10.186.137.200",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.201",
      "cells" : [],
      "enbId" : "201",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.202",
      "cells" : [],
      "enbId" : "202",
      "boards" : []
   },
   {
      "enbId" : "203",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.203"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.204",
      "enbId" : "204",
      "boards" : []
   },
   {
      "enbId" : "205",
      "boards" : [],
      "oamIp" : "10.186.137.205",
      "cells" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.206",
      "boards" : [],
      "enbId" : "206"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.207",
      "boards" : [],
      "enbId" : "207"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.208",
      "boards" : [],
      "enbId" : "208"
   },
   {
      "oamIp" : "10.186.137.209",
      "cells" : [],
      "boards" : [],
      "enbId" : "209"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.210",
      "enbId" : "210",
      "boards" : []
   },
   {
      "enbId" : "211",
      "boards" : [],
      "oamIp" : "10.186.137.211",
      "cells" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.212",
      "boards" : [],
      "enbId" : "212"
   },
   {
      "oamIp" : "10.186.137.213",
      "cells" : [],
      "enbId" : "213",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.214",
      "cells" : [],
      "enbId" : "214",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.215",
      "boards" : [],
      "enbId" : "215"
   },
   {
      "oamIp" : "10.186.137.216",
      "cells" : [],
      "boards" : [],
      "enbId" : "216"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.217",
      "enbId" : "217",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.218",
      "cells" : [],
      "enbId" : "218",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.219",
      "cells" : [],
      "boards" : [],
      "enbId" : "219"
   },
   {
      "enbId" : "220",
      "boards" : [],
      "cells" : [],
      "oamIp" : "10.186.137.220"
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.221",
      "boards" : [],
      "enbId" : "221"
   },
   {
      "boards" : [],
      "enbId" : "222",
      "oamIp" : "10.186.137.222",
      "cells" : []
   },
   {
      "boards" : [],
      "enbId" : "223",
      "oamIp" : "10.186.137.223",
      "cells" : []
   },
   {
      "oamIp" : "10.186.137.224",
      "cells" : [],
      "enbId" : "224",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.225",
      "enbId" : "225",
      "boards" : []
   },
   {
      "cells" : [],
      "oamIp" : "10.186.137.226",
      "enbId" : "226",
      "boards" : []
   },
   {
      "oamIp" : "10.186.137.227",
      "cells" : [],
      "enbId" : "227",
      "boards" : []
   },
   {
      "boards" : [],
      "enbId" : "228",
      "cells" : [],
      "oamIp" : "10.186.137.228"
   },
   {
      "boards" : [],
      "enbId" : "229",
      "oamIp" : "10.186.137.229",
      "cells" : []
   }
];

@Injectable()
export class NodeService {
  getNodes() : Promise<Node[]> {
    return Promise.resolve(mockNodes);
  }
}
