
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Node } from './node';
import { Cell } from './cell';
import { Board } from './board';

const mockNodes : Node[] = [];
/*
[
   {
      "oamIp" : "10.186.137.101",
      "datetime" : "2016-10-27T02:44:12",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "CB4N727611",
            "faultLED" : "OFF",
            "date" : "20120907",
            "boardType" : "RRUS11B1"
         },
         {
            "date" : "20121025",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "A401956770"
         },
         {
            "date" : "20130628",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D168369545",
            "faultLED" : "OFF"
         },
         {
            "date" : "20130920",
            "boardType" : "RRUS11B1",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16A069863"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "CD3D798873",
            "operLED" : "ON",
            "date" : "20150512",
            "boardType" : "DUS4102"
         },
         {
            "date" : "20110819",
            "boardType" : "RRUS11",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "CB4K131571",
            "operLED" : "ON"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=2"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=4"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=1"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=3",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "description" : "RiLink=1 (No SFP plugged in, additionalData: id 1, unitId 2, portNo 0(NOT_SET))",
            "severity" : "Min",
            "problem" : "Link Failure"
         },
         {
            "problem" : "NTP System Time Sync Problem",
            "severity" : "Min",
            "description" : "ManagedElementData=1 (NTP step alarm ManagedElementData Message: Ntp step outside valid range.)"
         }
      ],
      "enbId" : "101"
   },
   {
      "enbId" : "102",
      "alarm" : [
         {
            "severity" : "Min",
            "problem" : "NTP System Time Sync Problem",
            "description" : "TimeSetting=1,NtpServer=1 (NTP step alarm Message: Ntp step outside valid range.)"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=4",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=3",
            "admState" : "LOCKED"
         }
      ],
      "datetime" : "2016-10-27T02:44:54",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D820250366",
            "faultLED" : "OFF",
            "date" : "20141211",
            "boardType" : "RUS02B3"
         },
         {
            "maintLED" : "OFF",
            "serial" : "D821331615",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "date" : "20150625",
            "boardType" : "RRUS13B3"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "A402057933",
            "operLED" : "ON",
            "date" : "20130524",
            "boardType" : "DUS4101"
         },
         {
            "faultLED" : "OFF",
            "serial" : "D822518794",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RRU2217B20",
            "date" : "20151214"
         }
      ],
      "oamIp" : "10.186.137.102"
   },
   {
      "datetime" : "2016-10-27T02:45:29",
      "board" : [
         {
            "boardType" : "DUS4102",
            "date" : "20150109",
            "serial" : "CD3C350001",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         }
      ],
      "alarm" : [
         {
            "problem" : "Disconnected",
            "severity" : "Maj",
            "description" : "EquipmentSupportFunction=1 (Lost contact with the node that controls external alarms, power and climate HW, cabinetIdentifier:)"
         },
         {
            "description" : "ng Licensing=1 (Emergency Unlock has been activated and the alarm will remain till a new Emergency reset key is installed)",
            "problem" : "Emergency Unlock of Software Licensi",
            "severity" : "Maj"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "severity" : "Maj",
            "problem" : "Service Unavailable",
            "description" : "EUtranCellFDD=1 (underlying_resource_unavailable)"
         },
         {
            "description" : "EUtranCellFDD=2 (underlying_resource_unavailable)",
            "severity" : "Maj",
            "problem" : "Service Unavailable"
         },
         {
            "severity" : "Min",
            "problem" : "Link Failure",
            "description" : "RiLink=1 (No signal detected, additionalData: id 1, unitId 1, portNo 0)"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=2",
            "opState" : "DISABLED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         }
      ],
      "enbId" : "103",
      "oamIp" : "10.186.137.103"
   },
   {
      "oamIp" : "10.186.137.104",
      "enbId" : "104",
      "alarm" : [
         {
            "problem" : "Inconsistent Configuration",
            "severity" : "Maj",
            "description" : "FieldReplaceableUnit=RU-1 (No hardware detected for the configured FieldReplaceableUnit)"
         },
         {
            "severity" : "Maj",
            "problem" : "Inconsistent Configuration",
            "description" : "FieldReplaceableUnit=RU-2 (No hardware detected for the configured FieldReplaceableUnit)"
         },
         {
            "problem" : "SFP Not Present",
            "severity" : "Min",
            "description" : "FieldReplaceableUnit=DU-1,SfpModule=A (No SFP plugged in, additionalData: id 1, unitId 1, portNo 0)"
         }
      ],
      "cell" : [],
      "board" : [
         {
            "serial" : "D16R007439",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "DUS5201",
            "date" : "20150921"
         }
      ],
      "datetime" : "2016-10-27T02:46:04"
   },
   {
      "enbId" : "105",
      "datetime" : "2016-10-27T02:46:15",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "oamIp" : "10.186.137.105"
   },
   {
      "enbId" : "106",
      "board" : [
         {
            "faultLED" : "OFF",
            "serial" : "D16A068805",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RRUS11B1",
            "date" : "20130920"
         },
         {
            "boardType" : "XMU0301",
            "date" : "20150521",
            "serial" : "D16Q218919",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16P654930",
            "date" : "20150424",
            "boardType" : "DUS5201"
         }
      ],
      "datetime" : "2016-10-27T02:47:13",
      "alarm" : [],
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED"
         }
      ],
      "oamIp" : "10.186.137.106"
   },
   {
      "oamIp" : "10.186.137.107",
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         },
         {
            "problem" : "PLMN Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=2 (PLMN mcc:460 mnc:99)"
         },
         {
            "problem" : "PLMN Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=3 (PLMN mcc:460 mnc:99)"
         },
         {
            "description" : "EUtranCellFDD=1 (underlying_resource_unavailable)",
            "problem" : "Service Unavailable",
            "severity" : "Maj"
         },
         {
            "problem" : "Link Failure",
            "severity" : "Min",
            "description" : "RiLink=1 (No signal detected, additionalData: id 1, unitId 1, portNo 0(Mixed Mode))"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=3",
            "opState" : "DISABLED"
         }
      ],
      "board" : [
         {
            "date" : "20130116",
            "boardType" : "RRUS0ZB2",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D164963434"
         },
         {
            "date" : "20130116",
            "boardType" : "RRUS0ZB2",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "D164963435",
            "operLED" : "ON"
         },
         {
            "operLED" : "ON",
            "serial" : "D168382225",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "DUS4101",
            "date" : "20130629"
         },
         {
            "date" : "20150205",
            "boardType" : "RRUS0ZB2",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D16M738492",
            "faultLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "serial" : "D16M738491",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "date" : "20150205",
            "boardType" : "RRUS0ZB2"
         }
      ],
      "datetime" : "2016-10-27T02:48:03",
      "enbId" : "107"
   },
   {
      "oamIp" : "10.186.137.108",
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=NJ_smartran_108_B3_2"
         },
         {
            "id" : "EUtranCellFDD=NJ_smartran_108_B7",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=NJ_smartran_108",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=NJ_smartran_108_B3"
         }
      ],
      "datetime" : "2016-10-27T02:48:46",
      "board" : [
         {
            "maintLED" : "OFF",
            "serial" : "D820100336",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "date" : "20141114",
            "boardType" : "RRUS12B3"
         },
         {
            "serial" : "D16N698008",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RRUS12B1",
            "date" : "20150314"
         },
         {
            "faultLED" : "OFF",
            "serial" : "D821322483",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RRUS13B7",
            "date" : "20150619"
         },
         {
            "date" : "20130629",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "D168396498",
            "operLED" : "ON"
         }
      ],
      "enbId" : "108"
   },
   {
      "oamIp" : "10.186.137.109",
      "datetime" : "2016-10-27T02:49:15",
      "board" : [],
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "problem" : "GeneralSwError",
            "severity" : "Min",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,DeviceGroup=dul (Loading was rejected)"
         },
         {
            "description" : "RiLink=1 (No signal detected, additionalData: id 1, unitId 1, portNo 0)",
            "problem" : "Link Failure",
            "severity" : "Min"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=1"
         }
      ],
      "enbId" : "109"
   },
   {
      "datetime" : "2016-10-27T02:49:27",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "enbId" : "110",
      "oamIp" : "10.186.137.110"
   },
   {
      "enbId" : "111",
      "datetime" : "2016-10-27T02:49:38",
      "board" : [],
      "cell" : [],
      "alarm" : [],
      "oamIp" : "10.186.137.111"
   },
   {
      "oamIp" : "10.186.137.112",
      "enbId" : "112",
      "datetime" : "2016-10-27T02:49:49",
      "board" : [],
      "alarm" : [],
      "cell" : []
   },
   {
      "enbId" : "113",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T02:49:57",
      "board" : [],
      "oamIp" : "10.186.137.113"
   },
   {
      "oamIp" : "10.186.137.114",
      "datetime" : "2016-10-27T02:50:10",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "enbId" : "114"
   },
   {
      "board" : [],
      "datetime" : "2016-10-27T02:50:21",
      "alarm" : [],
      "cell" : [],
      "enbId" : "115",
      "oamIp" : "10.186.137.115"
   },
   {
      "oamIp" : "10.186.137.116",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "ManagedElementData=1 (additionalInfo: NTP general problem)"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "cell" : [
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "DISABLED"
         }
      ],
      "datetime" : "2016-10-27T02:50:52",
      "board" : [
         {
            "date" : "31C",
            "boardType" : "DUL2101",
            "maintLED" : "OFF",
            "serial" : "20120903",
            "faultLED" : "OFF",
            "operLED" : "ON"
         }
      ],
      "enbId" : "116"
   },
   {
      "oamIp" : "10.186.137.117",
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=3"
         },
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=4",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=1"
         }
      ],
      "alarm" : [
         {
            "problem" : "Inter-PIU Link Fault",
            "severity" : "Maj",
            "description" : "InterPiuLink=1 (Cable fault Message: No connection)"
         },
         {
            "description" : "Licensing=1,OptionalFeatureLicense=CoverageForLowComplexityUE (configuration_or_customizing_error)",
            "severity" : "Maj",
            "problem" : "License Key Missing"
         },
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         }
      ],
      "board" : [
         {
            "boardType" : "RRUS12B1",
            "date" : "20150228",
            "operLED" : "ON",
            "serial" : "D16N349140",
            "faultLED" : "OFF",
            "maintLED" : "OFF"
         },
         {
            "date" : "20120726",
            "boardType" : "RRUS11B1",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4N370848"
         },
         {
            "date" : "20150408",
            "boardType" : "RRUS13B1",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "D821037672",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "CF82988712",
            "faultLED" : "OFF",
            "date" : "20160114",
            "boardType" : "RRUS12B2"
         },
         {
            "date" : "20120703",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "serial" : "C826152204",
            "faultLED" : "OFF",
            "operLED" : "ON"
         }
      ],
      "datetime" : "2016-10-27T02:51:41",
      "enbId" : "117"
   },
   {
      "datetime" : "2016-10-27T02:51:53",
      "board" : [],
      "cell" : [],
      "alarm" : [],
      "enbId" : "118",
      "oamIp" : "10.186.137.118"
   },
   {
      "oamIp" : "10.186.137.119",
      "enbId" : "119",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T02:52:05",
      "board" : []
   },
   {
      "oamIp" : "10.186.137.120",
      "enbId" : "120",
      "datetime" : "2016-10-27T02:52:16",
      "board" : [],
      "alarm" : [],
      "cell" : []
   },
   {
      "oamIp" : "10.186.137.121",
      "alarm" : [
         {
            "problem" : "Disk Volume D Full",
            "severity" : "Maj",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "problem" : "Password File Fault",
            "severity" : "Min",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=2"
         }
      ],
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "16HZ",
            "faultLED" : "OFF",
            "serial" : "A401956243",
            "date" : "20121024",
            "boardType" : "DUS4101"
         },
         {
            "date" : "20120910",
            "boardType" : "TRANSCEIVER",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "CB4N757626",
            "operLED" : "ON"
         }
      ],
      "datetime" : "2016-10-27T02:52:50",
      "enbId" : "121"
   },
   {
      "oamIp" : "10.186.137.122",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T02:53:01",
      "board" : [],
      "enbId" : "122"
   },
   {
      "enbId" : "123",
      "board" : [],
      "datetime" : "2016-10-27T02:53:12",
      "cell" : [],
      "alarm" : [],
      "oamIp" : "10.186.137.123"
   },
   {
      "enbId" : "124",
      "alarm" : [
         {
            "description" : "EUtranCellTDD=1 (Configuration not valid due to Channel Bandwidth license shortage)",
            "severity" : "Maj",
            "problem" : "ResourceAllocationFailure"
         },
         {
            "problem" : "Password File Fault",
            "severity" : "Min",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "DISABLED"
         }
      ],
      "datetime" : "2016-10-27T02:53:50",
      "board" : [
         {
            "date" : "25C",
            "boardType" : "DUL2101",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "20120730",
            "operLED" : "ON"
         }
      ],
      "oamIp" : "10.186.137.124"
   },
   {
      "oamIp" : "10.186.137.125",
      "enbId" : "125",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T02:54:02"
   },
   {
      "oamIp" : "10.186.137.126",
      "cell" : [],
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "datetime" : "2016-10-27T02:54:35",
      "board" : [
         {
            "maintLED" : "OFF",
            "serial" : "A402057912",
            "faultLED" : "OFF",
            "operLED" : "05HZ",
            "date" : "20130524",
            "boardType" : "DUS4101"
         }
      ],
      "enbId" : "126"
   },
   {
      "datetime" : "2016-10-27T02:54:48",
      "board" : [],
      "cell" : [],
      "alarm" : [],
      "enbId" : "127",
      "oamIp" : "10.186.137.127"
   },
   {
      "enbId" : "128",
      "board" : [
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4P676091",
            "maintLED" : "OFF",
            "boardType" : "RRUS11B1",
            "date" : "20121226"
         },
         {
            "date" : "20120822",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "C826307264",
            "operLED" : "ON"
         }
      ],
      "datetime" : "2016-10-27T02:55:27",
      "cell" : [
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "problem" : "Gigabit Ethernet Link Fault",
            "severity" : "Maj",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,ExchangeTerminalIp=1,GigaBitEthernet=gbe-1 (Autonegotiation Failed to Meet Minimum Requirements.)"
         },
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         }
      ],
      "oamIp" : "10.186.137.128"
   },
   {
      "oamIp" : "10.186.137.129",
      "cell" : [
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1"
         }
      ],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "problem" : "Password File Fault",
            "severity" : "Min"
         }
      ],
      "datetime" : "2016-10-27T02:56:01",
      "board" : [
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "CA72329412",
            "operLED" : "ON",
            "date" : "20150121",
            "boardType" : "RRUS12B7"
         },
         {
            "date" : "20121025",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "A401956328"
         }
      ],
      "enbId" : "129"
   },
   {
      "oamIp" : "10.186.137.130",
      "cell" : [
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=4"
         }
      ],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "RiLink=3 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 1)",
            "severity" : "Min",
            "problem" : "Link Failure"
         },
         {
            "problem" : "Password File Fault",
            "severity" : "Min",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "datetime" : "2016-10-27T02:56:27",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4N712367",
            "date" : "20120906",
            "boardType" : "TRANSCEIVER"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "A401956244",
            "maintLED" : "OFF",
            "boardType" : "DUS4101",
            "date" : "20121024"
         }
      ],
      "enbId" : "130"
   },
   {
      "oamIp" : "10.186.137.131",
      "enbId" : "131",
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T02:56:39",
      "board" : []
   },
   {
      "oamIp" : "10.186.137.132",
      "enbId" : "132",
      "board" : [],
      "datetime" : "2016-10-27T02:56:50",
      "alarm" : [],
      "cell" : []
   },
   {
      "enbId" : "133",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T02:57:01",
      "board" : [],
      "oamIp" : "10.186.137.133"
   },
   {
      "oamIp" : "10.186.137.134",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T02:57:12",
      "board" : [],
      "enbId" : "134"
   },
   {
      "enbId" : "135",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T02:57:23",
      "oamIp" : "10.186.137.135"
   },
   {
      "enbId" : "136",
      "board" : [
         {
            "date" : "33C",
            "boardType" : "DUL2001",
            "maintLED" : "OFF",
            "serial" : "20110817",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "serial" : "D169898228",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RRUS11B1",
            "date" : "20130912"
         }
      ],
      "datetime" : "2016-10-27T02:57:58",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "LicenseKeyMissing",
            "description" : "Licensing=1,OptionalFeatureLicense=MockBasicTestLicense0 (configuration_or_customizing_error)"
         },
         {
            "description" : "Licensing=1,OptionalFeatureLicense=MockBasicTestLicense1 (configuration_or_customizing_error)",
            "severity" : "Maj",
            "problem" : "LicenseKeyMissing"
         },
         {
            "description" : "Licensing=1,OptionalFeatureLicense=MockBasicTestLicense2 (configuration_or_customizing_error)",
            "severity" : "Maj",
            "problem" : "LicenseKeyMissing"
         },
         {
            "problem" : "LicenseKeyMissing",
            "severity" : "Maj",
            "description" : "Licensing=1,OptionalFeatureLicense=MockBasicTestLicense3 (configuration_or_customizing_error)"
         },
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "ManagedElementData=1 (additionalInfo: NTP general problem)"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED"
         }
      ],
      "oamIp" : "10.186.137.136"
   },
   {
      "oamIp" : "10.186.137.137",
      "enbId" : "137",
      "cell" : [
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "ManagedElementData=1 (additionalInfo: NTP general problem)"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "datetime" : "2016-10-27T02:58:27",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "20120215",
            "faultLED" : "OFF",
            "date" : "39C",
            "boardType" : "DUL2101"
         }
      ]
   },
   {
      "oamIp" : "10.186.137.138",
      "enbId" : "138",
      "datetime" : "2016-10-27T02:58:58",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "05HZ",
            "faultLED" : "OFF",
            "serial" : "20120215",
            "date" : "Active*",
            "boardType" : "DUL2101"
         }
      ],
      "cell" : [],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "ManagedElementData=1 (additionalInfo: NTP general problem)"
         }
      ]
   },
   {
      "oamIp" : "10.186.137.139",
      "enbId" : "139",
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "ManagedElementData=1 (additionalInfo: NTP general problem)"
         },
         {
            "description" : "EUtranCellTDD=1 (Configuration not valid due to Channel Bandwidth license shortage)",
            "problem" : "ResourceAllocationFailure",
            "severity" : "Maj"
         },
         {
            "severity" : "Min",
            "problem" : "LinkFailure",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,RiPort=D (No SFP plugged in, id 1, port 4, cascadeNo 0, ruPortNo 0)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "problem" : "Password File Fault",
            "severity" : "Min"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "DISABLED"
         }
      ],
      "datetime" : "2016-10-27T02:59:23",
      "board" : [
         {
            "faultLED" : "OFF",
            "serial" : "20121005",
            "operLED" : "05HZ",
            "maintLED" : "OFF",
            "boardType" : "DUL2101",
            "date" : "38C"
         }
      ]
   },
   {
      "datetime" : "2016-10-27T02:59:48",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "05HZ",
            "serial" : "20120802",
            "faultLED" : "OFF",
            "date" : "36C",
            "boardType" : "DUL2101"
         }
      ],
      "alarm" : [
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,ExchangeTerminalIp=1,GigaBitEthernet=gbe-1 (Autonegotiation Failed to Meet Minimum Requirements.)",
            "problem" : "Gigabit Ethernet Link Fault",
            "severity" : "Maj"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "ManagedElementData=1 (additionalInfo: NTP general problem)"
         },
         {
            "severity" : "Maj",
            "problem" : "ResourceAllocationFailure",
            "description" : "EUtranCellTDD=1 (Configuration not valid due to Channel Bandwidth license shortage)"
         },
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,RiPort=D (No SFP plugged in, id 1, port 4, cascadeNo 0, ruPortNo 0)",
            "severity" : "Min",
            "problem" : "LinkFailure"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "severity" : "Min",
            "problem" : "Password File Fault"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellTDD=1",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         }
      ],
      "enbId" : "140",
      "oamIp" : "10.186.137.140"
   },
   {
      "oamIp" : "10.186.137.141",
      "enbId" : "141",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "EUtranCellTDD=1 (PLMN mcc:460 mnc:99)",
            "severity" : "Maj",
            "problem" : "PLMN Service Unavailable"
         },
         {
            "description" : "EUtranCellTDD=2 (PLMN mcc:460 mnc:99)",
            "problem" : "PLMN Service Unavailable",
            "severity" : "Maj"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=2",
            "admState" : "UNLOCKED"
         }
      ],
      "datetime" : "2016-10-27T03:00:27",
      "board" : [
         {
            "boardType" : "RRUS82B41",
            "date" : "20150611",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D821307711",
            "maintLED" : "OFF"
         },
         {
            "boardType" : "DUS4101",
            "date" : "20121025",
            "serial" : "A401956326",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         }
      ]
   },
   {
      "oamIp" : "10.186.137.142",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "Disk Volume D Full",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)"
         },
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         },
         {
            "problem" : "Fan Disconnected",
            "severity" : "Min",
            "description" : "AuxPlugInUnit=RRU-1 (Replaceable fan module, part of AIR 32 B2A B66AA 1.4 with product number KRD 901 146/1 and serial number TM30010743 (Mixed Mode Radio with external ME).)"
         },
         {
            "problem" : "Inconsistent Configuration",
            "severity" : "Min",
            "description" : "AntennaUnitGroup=1,AntennaNearUnit=1 (Antenna Near Unit ManagedElement=1,Equipment=1,AntennaUnitGroup=1,AntennaNearUnit=1 is controlled by other RAN (Mixed Mode Radio with external ME).)"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=2"
         },
         {
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         }
      ],
      "board" : [
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "A401956236",
            "maintLED" : "OFF",
            "boardType" : "DUS4101",
            "date" : "20121024"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16Q445576",
            "date" : "20150629",
            "boardType" : "RRUS32AB2"
         }
      ],
      "datetime" : "2016-10-27T03:01:04",
      "enbId" : "142"
   },
   {
      "enbId" : "143",
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "description" : "EUtranCellFDD=1 (InconsistentConfiguration)",
            "severity" : "Maj",
            "problem" : "Service Unavailable"
         },
         {
            "description" : "RiLink=1 (No signal detected, additionalData: id 1, unitId 1, portNo 0)",
            "severity" : "Min",
            "problem" : "Link Failure"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         }
      ],
      "datetime" : "2016-10-27T03:01:29",
      "board" : [
         {
            "maintLED" : "OFF",
            "serial" : "A401956782",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "date" : "20121025",
            "boardType" : "DUS4101"
         }
      ],
      "oamIp" : "10.186.137.143"
   },
   {
      "datetime" : "2016-10-27T03:02:03",
      "board" : [
         {
            "boardType" : "RRUL62B40A",
            "date" : "20121017",
            "serial" : "CB4P056740",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "ON"
         },
         {
            "serial" : "CB4M483728",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "ON",
            "boardType" : "RRUL62B40A",
            "date" : "20120418"
         },
         {
            "date" : "20120815",
            "boardType" : "TRANSCEIVER",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4N520285"
         },
         {
            "maintLED" : "OFF",
            "serial" : "C826207826",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "date" : "20120717",
            "boardType" : "DUS4101"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "C826207848",
            "maintLED" : "OFF",
            "boardType" : "DUS4101",
            "date" : "20120717"
         },
         {
            "date" : "20120503",
            "boardType" : "RRUL62B40A",
            "maintLED" : "ON",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4M622811"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4P056741",
            "maintLED" : "ON",
            "boardType" : "RRUL62B40A",
            "date" : "20121017"
         },
         {
            "date" : "20120412",
            "boardType" : "RRUL62B40A",
            "maintLED" : "ON",
            "operLED" : "ON",
            "serial" : "CB4M448943",
            "faultLED" : "OFF"
         },
         {
            "faultLED" : "OFF",
            "serial" : "CB4P363038",
            "operLED" : "ON",
            "maintLED" : "ON",
            "boardType" : "RRUL62B40A",
            "date" : "20121116"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "CB4P362993",
            "operLED" : "ON",
            "date" : "20121116",
            "boardType" : "RRUL62B40A"
         },
         {
            "boardType" : "TRANSCEIVER",
            "date" : "20120710",
            "operLED" : "ON",
            "serial" : "CB4N240038",
            "faultLED" : "OFF",
            "maintLED" : "ON"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4N300318",
            "maintLED" : "OFF",
            "boardType" : "TRANSCEIVER",
            "date" : "20120717"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellTDD=2",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=4",
            "admState" : "LOCKED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=3",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=8",
            "admState" : "LOCKED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=11",
            "admState" : "LOCKED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=9",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=12"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=6",
            "opState" : "DISABLED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "DISABLED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=7",
            "opState" : "DISABLED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=10",
            "opState" : "DISABLED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=5",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         },
         {
            "description" : "RiLink=9 (Not in operation, additionalData: id 1, unitId 2, portNo 2(NOT_SET))",
            "severity" : "Min",
            "problem" : "Link Failure"
         },
         {
            "problem" : "Password File Fault",
            "severity" : "Min",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "enbId" : "144",
      "oamIp" : "10.186.137.144"
   },
   {
      "oamIp" : "10.186.137.145",
      "enbId" : "145",
      "datetime" : "2016-10-27T03:02:42",
      "board" : [
         {
            "date" : "20121018",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "serial" : "A401952963",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4N711718",
            "date" : "20120905",
            "boardType" : "RRUL62B40A"
         },
         {
            "date" : "20120418",
            "boardType" : "RRUL62B40A",
            "maintLED" : "OFF",
            "serial" : "CB4M483726",
            "faultLED" : "ON",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "CB4M451452",
            "faultLED" : "OFF",
            "date" : "20120413",
            "boardType" : "RRUL62B40A"
         },
         {
            "maintLED" : "OFF",
            "serial" : "CB4M475497",
            "faultLED" : "ON",
            "operLED" : "ON",
            "date" : "20120417",
            "boardType" : "RRUL62B40A"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=1",
            "admState" : "LOCKED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=3",
            "admState" : "LOCKED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=4",
            "admState" : "LOCKED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellTDD=2",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP synchronize time failure (changed server/step))"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "severity" : "Min",
            "problem" : "Password File Fault"
         }
      ]
   },
   {
      "datetime" : "2016-10-27T03:02:54",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "enbId" : "146",
      "oamIp" : "10.186.137.146"
   },
   {
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T03:03:05",
      "board" : [],
      "enbId" : "147",
      "oamIp" : "10.186.137.147"
   },
   {
      "oamIp" : "10.186.137.148",
      "enbId" : "148",
      "board" : [
         {
            "operLED" : "ON",
            "serial" : "D16F306849",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "XMU0301",
            "date" : "20140610"
         },
         {
            "boardType" : "RRUS0ZB2",
            "date" : "20150205",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16M738406",
            "maintLED" : "OFF"
         },
         {
            "boardType" : "XMU0301",
            "date" : "20150217",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16N036457",
            "maintLED" : "OFF"
         },
         {
            "operLED" : "ON",
            "serial" : "CB4J000393",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "RUS01B2",
            "date" : "20110608"
         },
         {
            "boardType" : "RRUS0ZB7",
            "date" : "20130528",
            "serial" : "C827046028",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "boardType" : "RUS02B2",
            "date" : "20131017",
            "serial" : "CB4R913676",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "operLED" : "ON",
            "serial" : "D16J003276",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "DUS4102",
            "date" : "20140920"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "C828067706",
            "operLED" : "ON",
            "date" : "20140529",
            "boardType" : "RRUS12B8"
         },
         {
            "faultLED" : "OFF",
            "serial" : "20140721",
            "operLED" : "OFF",
            "maintLED" : "KRC161321/2",
            "boardType" : "RRUS12B5",
            "date" : "31.6"
         },
         {
            "date" : "20150205",
            "boardType" : "RRUS0ZB2",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D16M738405",
            "faultLED" : "OFF"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4J542320",
            "maintLED" : "OFF",
            "boardType" : "RUS01B2",
            "date" : "20110713"
         },
         {
            "boardType" : "RUS02B2",
            "date" : "20130225",
            "serial" : "CB4Q073827",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "boardType" : "DUS4102",
            "date" : "20140802",
            "serial" : "CB4U683609",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "CB4Q907580",
            "faultLED" : "OFF",
            "date" : "20130609",
            "boardType" : "RRUS12B3"
         },
         {
            "boardType" : "RRUS0ZB7",
            "date" : "20130528",
            "faultLED" : "OFF",
            "serial" : "C827046029",
            "operLED" : "ON",
            "maintLED" : "OFF"
         }
      ],
      "datetime" : "2016-10-27T03:04:11",
      "alarm" : [],
      "cell" : [
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=sE1"
         },
         {
            "opState" : "ENABLED",
            "id" : "EUtranCellFDD=pA1",
            "admState" : "UNLOCKED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=pA2",
            "opState" : "ENABLED"
         },
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=sB1"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=sA1",
            "opState" : "ENABLED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=sC1D1",
            "opState" : "ENABLED"
         },
         {
            "id" : "EUtranCellFDD=pD1",
            "admState" : "UNLOCKED",
            "opState" : "ENABLED"
         }
      ]
   },
   {
      "datetime" : "2016-10-27T03:04:22",
      "board" : [],
      "cell" : [],
      "alarm" : [],
      "enbId" : "149",
      "oamIp" : "10.186.137.149"
   },
   {
      "enbId" : "150",
      "datetime" : "2016-10-27T03:04:59",
      "board" : [
         {
            "boardType" : "DUL2001",
            "date" : "42C",
            "serial" : "20110817",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         }
      ],
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "description" : "RiLink=1 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 0(NOT_SET))",
            "severity" : "Min",
            "problem" : "Link Failure"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         }
      ],
      "oamIp" : "10.186.137.150"
   },
   {
      "oamIp" : "10.186.137.151",
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T03:05:10",
      "board" : [],
      "enbId" : "151"
   },
   {
      "oamIp" : "10.186.137.152",
      "datetime" : "2016-10-27T03:05:21",
      "board" : [],
      "cell" : [],
      "alarm" : [],
      "enbId" : "152"
   },
   {
      "enbId" : "153",
      "datetime" : "2016-10-27T03:05:32",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "oamIp" : "10.186.137.153"
   },
   {
      "oamIp" : "10.186.137.154",
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:05:43",
      "enbId" : "154"
   },
   {
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:05:54",
      "enbId" : "155",
      "oamIp" : "10.186.137.155"
   },
   {
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:06:05",
      "enbId" : "156",
      "oamIp" : "10.186.137.156"
   },
   {
      "oamIp" : "10.186.137.157",
      "enbId" : "157",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP Server Reachability Fault",
            "description" : "IpAccessHostEt=1,IpSyncRef=7 (unavailable)"
         },
         {
            "description" : "Subrack=1,Slot=2,PlugInUnit=1 (PIU is missing.)",
            "problem" : "Plug-In Unit General Problem",
            "severity" : "Maj"
         },
         {
            "description" : "EUtranCellFDD=1 (underlying_resource_unavailable)",
            "severity" : "Maj",
            "problem" : "Service Unavailable"
         },
         {
            "description" : "EUtranCellFDD=3 (underlying_resource_unavailable)",
            "problem" : "Service Unavailable",
            "severity" : "Maj"
         },
         {
            "description" : "EUtranCellFDD=4 (underlying_resource_unavailable)",
            "severity" : "Maj",
            "problem" : "Service Unavailable"
         },
         {
            "description" : "EUtranCellFDD=5 (underlying_resource_unavailable)",
            "problem" : "Service Unavailable",
            "severity" : "Maj"
         },
         {
            "problem" : "Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=6 (underlying_resource_unavailable)"
         },
         {
            "description" : "RiLink=1 (No signal detected, additionalData: id 1, unitId 1, portNo 0(Mixed Mode))",
            "severity" : "Min",
            "problem" : "Link Failure"
         },
         {
            "description" : "ManagedElementData=1 (NTP step alarm ManagedElementData Message: Ntp step outside valid range.)",
            "severity" : "Min",
            "problem" : "NTP System Time Sync Problem"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=6",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=3",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=5"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=4",
            "admState" : "UNLOCKED"
         }
      ],
      "datetime" : "2016-10-27T03:06:31",
      "board" : [
         {
            "operLED" : "ON",
            "serial" : "C826223850",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "DUS4101",
            "date" : "20120720"
         }
      ]
   },
   {
      "oamIp" : "10.186.137.158",
      "enbId" : "158",
      "board" : [
         {
            "date" : "20120720",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "C826223836",
            "faultLED" : "OFF"
         },
         {
            "boardType" : "RRUS13B3",
            "date" : "20150804",
            "operLED" : "ON",
            "serial" : "D16Q687416",
            "faultLED" : "OFF",
            "maintLED" : "OFF"
         }
      ],
      "datetime" : "2016-10-27T03:07:00",
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED"
         }
      ],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "problem" : "HW Fault",
            "severity" : "Min",
            "description" : "AntennaUnitGroup=1,AntennaNearUnit=TMF2 (Parameter out of range)"
         },
         {
            "severity" : "Min",
            "problem" : "HW Fault",
            "description" : "AntennaUnitGroup=1,AntennaNearUnit=TMF3 (Parameter out of range)"
         },
         {
            "description" : "AntennaUnitGroup=1,AntennaNearUnit=TMF1 (Timeout: Failed to get anuConnectIndication)",
            "severity" : "Min",
            "problem" : "No Connection"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "problem" : "Password File Fault",
            "severity" : "Min"
         }
      ]
   },
   {
      "enbId" : "159",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T03:07:11",
      "board" : [],
      "oamIp" : "10.186.137.159"
   },
   {
      "oamIp" : "10.186.137.160",
      "enbId" : "160",
      "datetime" : "2016-10-27T03:07:23",
      "board" : [],
      "cell" : [],
      "alarm" : []
   },
   {
      "enbId" : "161",
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T03:07:35",
      "board" : [],
      "oamIp" : "10.186.137.161"
   },
   {
      "enbId" : "162",
      "board" : [
         {
            "boardType" : "RRUS11B1",
            "date" : "20130222",
            "faultLED" : "OFF",
            "serial" : "CB4Q043639",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "date" : "20130409",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "A402035898",
            "faultLED" : "OFF"
         }
      ],
      "datetime" : "2016-10-27T03:08:06",
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "severity" : "Min",
            "problem" : "Password File Fault"
         }
      ],
      "cell" : [
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1"
         }
      ],
      "oamIp" : "10.186.137.162"
   },
   {
      "oamIp" : "10.186.137.163",
      "datetime" : "2016-10-27T03:08:17",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "enbId" : "163"
   },
   {
      "enbId" : "164",
      "cell" : [
         {
            "id" : "EUtranCellFDD=3",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=4",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=1"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=2",
            "admState" : "LOCKED"
         }
      ],
      "alarm" : [
         {
            "problem" : "Disk Volume D Full",
            "severity" : "Maj",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,TimingUnit=1,GpsSyncRef=gps (Cause: Loss of signal)",
            "severity" : "Maj",
            "problem" : "Network Synch Time from GPS Missing"
         }
      ],
      "board" : [
         {
            "date" : "20150112",
            "boardType" : "RRUS13B1",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "C829143219",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D168111565",
            "date" : "20130616",
            "boardType" : "DUS4101"
         },
         {
            "boardType" : "RRUS13B1",
            "date" : "20150123",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D820493296",
            "maintLED" : "OFF"
         }
      ],
      "datetime" : "2016-10-27T03:08:59",
      "oamIp" : "10.186.137.164"
   },
   {
      "oamIp" : "10.186.137.165",
      "enbId" : "",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:09:10"
   },
   {
      "oamIp" : "10.186.137.166",
      "enbId" : "",
      "board" : [],
      "datetime" : "2016-10-27T03:09:21",
      "cell" : [],
      "alarm" : []
   },
   {
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "Loss of Sync over CPRI Connections",
            "description" : "Synchronization=1,NodeGroupSyncMember=1 (clock_synchronisation_problem)"
         },
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         }
      ],
      "cell" : [
         {
            "opState" : "ENABLED",
            "id" : "EUtranCellFDD=3",
            "admState" : "UNLOCKED"
         }
      ],
      "datetime" : "2016-10-27T03:09:54",
      "board" : [
         {
            "boardType" : "DUS4101",
            "date" : "20121018",
            "operLED" : "ON",
            "serial" : "A401952965",
            "faultLED" : "OFF",
            "maintLED" : "OFF"
         },
         {
            "serial" : "CB4R989664",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RRUS12B8",
            "date" : "20131027"
         }
      ],
      "enbId" : "167",
      "oamIp" : "10.186.137.167"
   },
   {
      "board" : [
         {
            "boardType" : "RRU2203B1",
            "date" : "20150525",
            "operLED" : "ON",
            "serial" : "C829919838",
            "faultLED" : "OFF",
            "maintLED" : "OFF"
         },
         {
            "date" : "20150525",
            "boardType" : "RRU2203B1",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "C829919845",
            "operLED" : "ON"
         },
         {
            "date" : "20131127",
            "boardType" : "ODS11m01",
            "maintLED" : "OFF",
            "serial" : "CB4S215242",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "CB4S271881",
            "operLED" : "ON",
            "date" : "20131205",
            "boardType" : "RUS12mB1"
         }
      ],
      "datetime" : "2016-10-27T03:10:22",
      "cell" : [
         {
            "id" : "EUtranCellFDD=3",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED"
         },
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Problem",
            "severity" : "Min",
            "description" : "ManagedElementData=1 (NTP step alarm Message: Ntp step outside valid range.)"
         }
      ],
      "enbId" : "168",
      "oamIp" : "10.186.137.168"
   },
   {
      "oamIp" : "10.186.137.169",
      "datetime" : "2016-10-27T03:10:55",
      "board" : [
         {
            "operLED" : "ON",
            "serial" : "20120524",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "DUL2001",
            "date" : "37C"
         }
      ],
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "problem" : "Resource Allocation Failure",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=1 (Configuration not valid due to Channel Bandwidth license shortage)"
         },
         {
            "description" : "RiLink=1 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 0)",
            "severity" : "Min",
            "problem" : "Link Failure"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         }
      ],
      "enbId" : "169"
   },
   {
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED"
         },
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=3",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "EUtranCellFDD=1 (underlying_resource_unavailable)",
            "problem" : "Service Unavailable",
            "severity" : "Maj"
         },
         {
            "problem" : "Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=2 (underlying_resource_unavailable)"
         },
         {
            "problem" : "Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=3 (underlying_resource_unavailable)"
         },
         {
            "description" : "RiLink=1 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 0)",
            "problem" : "Link Failure",
            "severity" : "Min"
         },
         {
            "problem" : "Link Failure",
            "severity" : "Min",
            "description" : "RiLink=2 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 1)"
         },
         {
            "description" : "RiLink=3 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 2)",
            "severity" : "Min",
            "problem" : "Link Failure"
         }
      ],
      "datetime" : "2016-10-27T03:11:21",
      "board" : [
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "20110408",
            "maintLED" : "OFF",
            "boardType" : "DUL2001",
            "date" : "49C"
         }
      ],
      "enbId" : "170",
      "oamIp" : "10.186.137.170"
   },
   {
      "cell" : [
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=2"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,TimingUnit=1,GpsSyncRef=gps (Cause: Loss of signal)",
            "severity" : "Maj",
            "problem" : "Network Synch Time from GPS Missing"
         },
         {
            "description" : "ManagedElementData=1 (NTP step alarm ManagedElementData Message: Ntp step outside valid range.)",
            "problem" : "NTP System Time Sync Problem",
            "severity" : "Min"
         }
      ],
      "datetime" : "2016-10-27T03:11:49",
      "board" : [
         {
            "date" : "20150319",
            "boardType" : "RRU2217B1",
            "maintLED" : "OFF",
            "serial" : "C829697088",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "date" : "20130629",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "16HZ",
            "faultLED" : "OFF",
            "serial" : "D168382239"
         },
         {
            "faultLED" : "OFF",
            "serial" : "D820838430",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RRUS13B3",
            "date" : "20150305"
         }
      ],
      "enbId" : "171",
      "oamIp" : "10.186.137.171"
   },
   {
      "oamIp" : "10.186.137.172",
      "enbId" : "172",
      "alarm" : [
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)",
            "severity" : "Maj",
            "problem" : "Disk Volume D Full"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "EUtranCellFDD=1 (PLMN mcc:555 mnc:1)",
            "problem" : "PLMN Service Unavailable",
            "severity" : "Maj"
         },
         {
            "severity" : "Maj",
            "problem" : "PLMN Service Unavailable",
            "description" : "EUtranCellFDD=2 (PLMN mcc:555 mnc:1)"
         },
         {
            "severity" : "Min",
            "problem" : "Resource Allocation Failure Service",
            "description" : "Degraded SectorCarrier=1 (Insufficient RF power in radio equipment)"
         },
         {
            "description" : "Degraded SectorCarrier=2 (Insufficient RF power in radio equipment)",
            "problem" : "Resource Allocation Failure Service",
            "severity" : "Min"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         }
      ],
      "datetime" : "2016-10-27T03:12:27",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "A401954815",
            "faultLED" : "OFF",
            "date" : "20121022",
            "boardType" : "DUS4101"
         },
         {
            "operLED" : "ON",
            "serial" : "D16P909569",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "RRUS12mB2",
            "date" : "20150505"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "C829932267",
            "date" : "20150604",
            "boardType" : "RRU2203B66A"
         }
      ]
   },
   {
      "datetime" : "2016-10-27T03:13:06",
      "board" : [
         {
            "date" : "20130524",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "A402057934",
            "faultLED" : "OFF"
         },
         {
            "operLED" : "0.5HZ",
            "serial" : "D820838431",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "RRUS13B3",
            "date" : "20150305"
         }
      ],
      "alarm" : [
         {
            "description" : "SectorEquipmentFunction=1 (Optional license Multistandard RBS - Basic Mixed Mode (LTE) missing)",
            "problem" : "Feature Resource Missing",
            "severity" : "Maj"
         },
         {
            "description" : "EUtranCellFDD=1 (underlying_resource_unavailable)",
            "problem" : "Service Unavailable",
            "severity" : "Maj"
         },
         {
            "severity" : "Min",
            "problem" : "NTP System Time Sync Problem",
            "description" : "TimeSetting=1,NtpServer=1 (NTP step alarm Message: Ntp step outside valid range.)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "problem" : "Password File Fault",
            "severity" : "Min"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         }
      ],
      "enbId" : "173",
      "oamIp" : "10.186.137.173"
   },
   {
      "oamIp" : "10.186.137.174",
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,TimingUnit=1,GpsSyncRef=1 (Cause: Loss of signal)",
            "severity" : "Maj",
            "problem" : "Network Synch Time from GPS Missing"
         },
         {
            "description" : "EUtranCellTDD=1 (Configuration not valid due to Channel Bandwidth license shortage)",
            "severity" : "Maj",
            "problem" : "Resource Allocation Failure"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "DISABLED"
         }
      ],
      "datetime" : "2016-10-27T03:13:31",
      "board" : [
         {
            "boardType" : "DUS4101",
            "date" : "20130524",
            "faultLED" : "OFF",
            "serial" : "A402057928",
            "operLED" : "ON",
            "maintLED" : "OFF"
         }
      ],
      "enbId" : "174"
   },
   {
      "oamIp" : "10.186.137.175",
      "datetime" : "2016-10-27T03:13:42",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "enbId" : "175"
   },
   {
      "oamIp" : "10.186.137.176",
      "enbId" : "176",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T03:13:53",
      "board" : []
   },
   {
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:14:07",
      "enbId" : "177",
      "oamIp" : "10.186.137.177"
   },
   {
      "oamIp" : "10.186.137.178",
      "cell" : [
         {
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "problem" : "Disk Volume D Full",
            "severity" : "Maj",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "problem" : "PLMN Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=1 (PLMN mcc:460 mnc:99)"
         }
      ],
      "datetime" : "2016-10-27T03:14:37",
      "board" : [
         {
            "date" : "20150228",
            "boardType" : "RRUS12B1",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16N347845"
         },
         {
            "date" : "20130629",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "serial" : "D168382203",
            "faultLED" : "OFF",
            "operLED" : "ON"
         }
      ],
      "enbId" : "178"
   },
   {
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:14:48",
      "enbId" : "179",
      "oamIp" : "10.186.137.179"
   },
   {
      "enbId" : "180",
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T03:14:59",
      "board" : [],
      "oamIp" : "10.186.137.180"
   },
   {
      "oamIp" : "10.186.137.181",
      "enbId" : "181",
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T03:15:10",
      "board" : []
   },
   {
      "oamIp" : "10.186.137.182",
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:15:22",
      "enbId" : "182"
   },
   {
      "oamIp" : "10.186.137.183",
      "enbId" : "183",
      "datetime" : "2016-10-27T03:15:33",
      "board" : [],
      "alarm" : [],
      "cell" : []
   },
   {
      "datetime" : "2016-10-27T03:15:44",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "enbId" : "184",
      "oamIp" : "10.186.137.184"
   },
   {
      "oamIp" : "10.186.137.185",
      "enbId" : "185",
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:15:56"
   },
   {
      "enbId" : "186",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:16:07",
      "oamIp" : "10.186.137.186"
   },
   {
      "oamIp" : "10.186.137.187",
      "enbId" : "187",
      "board" : [
         {
            "boardType" : "RRUS13B3A",
            "date" : "20150402",
            "serial" : "D821025450",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "boardType" : "DUS4101",
            "date" : "20130629",
            "operLED" : "ON",
            "serial" : "D168382235",
            "faultLED" : "OFF",
            "maintLED" : "OFF"
         }
      ],
      "datetime" : "2016-10-27T03:16:36",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "ENodeBFunction=1 (X2 link problem to one or several neighbouring eNodeBs. PLMN ID-eNB ID 1 :  5551-188)",
            "problem" : "External Link Failure",
            "severity" : "Min"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "cell" : [
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1"
         }
      ]
   },
   {
      "enbId" : "188",
      "cell" : [
         {
            "opState" : "ENABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED"
         }
      ],
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "severity" : "Min",
            "problem" : "External Link Failure",
            "description" : "ENodeBFunction=1 (X2 link problem to one or several neighbouring eNodeBs. PLMN ID-eNB ID 1 :  5551-187)"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         },
         {
            "description" : "AuxPlugInUnit=RRU-1,DeviceGroup=ru,RfPort=B (Reflected power too high [ B ])",
            "severity" : "Min",
            "problem" : "RF Reflected Power High"
         },
         {
            "problem" : "Service Degraded",
            "severity" : "Min",
            "description" : "EUtranCellFDD=1 (performance_degraded)"
         }
      ],
      "datetime" : "2016-10-27T03:17:15",
      "board" : [
         {
            "date" : "20150408",
            "boardType" : "RRUS13B1",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D821037685",
            "faultLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "D168382134",
            "operLED" : "ON",
            "date" : "20130629",
            "boardType" : "DUS4101"
         }
      ],
      "oamIp" : "10.186.137.188"
   },
   {
      "oamIp" : "10.186.137.189",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D169176215",
            "faultLED" : "OFF",
            "date" : "20130806",
            "boardType" : "DUS3101"
         },
         {
            "maintLED" : "OFF",
            "serial" : "CB4P345366",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "date" : "20121114",
            "boardType" : "RRUS11B5"
         }
      ],
      "datetime" : "2016-10-27T03:17:45",
      "alarm" : [
         {
            "description" : "RiLink=2 (No signal detected, additionalData: id 1, unitId 1, portNo 1(NOT_SET))",
            "severity" : "Min",
            "problem" : "Link Failure"
         },
         {
            "description" : "ManagedElementData=1 (NTP step alarm ManagedElementData Message: Ntp step outside valid range.)",
            "problem" : "NTP System Time Sync Problem",
            "severity" : "Min"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=2",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=3"
         }
      ],
      "enbId" : "189"
   },
   {
      "oamIp" : "10.186.137.190",
      "cell" : [],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "severity" : "Min",
            "problem" : "Link Failure",
            "description" : "RiLink=1 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 0)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "problem" : "Password File Fault",
            "severity" : "Min"
         }
      ],
      "datetime" : "2016-10-27T03:18:21",
      "board" : [
         {
            "serial" : "D169186040",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "DUS3101",
            "date" : "20130806"
         }
      ],
      "enbId" : "190"
   },
   {
      "enbId" : "191",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:18:33",
      "oamIp" : "10.186.137.191"
   },
   {
      "enbId" : "192",
      "board" : [],
      "datetime" : "2016-10-27T03:18:44",
      "cell" : [],
      "alarm" : [],
      "oamIp" : "10.186.137.192"
   },
   {
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:18:56",
      "enbId" : "193",
      "oamIp" : "10.186.137.193"
   },
   {
      "oamIp" : "10.186.137.194",
      "enbId" : "194",
      "board" : [],
      "datetime" : "2016-10-27T03:19:07",
      "cell" : [],
      "alarm" : []
   },
   {
      "oamIp" : "10.186.137.195",
      "datetime" : "2016-10-27T03:19:21",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "enbId" : "195"
   },
   {
      "datetime" : "2016-10-27T03:19:32",
      "board" : [],
      "cell" : [],
      "alarm" : [],
      "enbId" : "196",
      "oamIp" : "10.186.137.196"
   },
   {
      "oamIp" : "10.186.137.197",
      "enbId" : "197",
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:19:44"
   },
   {
      "enbId" : "198",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T03:19:55",
      "board" : [],
      "oamIp" : "10.186.137.198"
   },
   {
      "oamIp" : "10.186.137.199",
      "enbId" : "199",
      "datetime" : "2016-10-27T03:20:16",
      "board" : [],
      "alarm" : [],
      "cell" : []
   },
   {
      "oamIp" : "10.186.137.200",
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:20:29",
      "enbId" : "200"
   },
   {
      "enbId" : "201",
      "datetime" : "2016-10-27T03:20:40",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "oamIp" : "10.186.137.201"
   },
   {
      "oamIp" : "10.186.137.202",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:20:52",
      "enbId" : "202"
   },
   {
      "enbId" : "203",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:21:04",
      "oamIp" : "10.186.137.203"
   },
   {
      "oamIp" : "10.186.137.204",
      "enbId" : "204",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP server configuration problem)"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "UNLOCKED",
            "opState" : "ENABLED"
         },
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=1"
         }
      ],
      "board" : [
         {
            "boardType" : "DUS4101",
            "date" : "20120823",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "C826308481",
            "maintLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "C826211229",
            "faultLED" : "OFF",
            "date" : "20120718",
            "boardType" : "DUS4101"
         },
         {
            "date" : "20130920",
            "boardType" : "RRUS11B1",
            "maintLED" : "OFF",
            "serial" : "D16A068802",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "serial" : "D169148152",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RUS01B4",
            "date" : "20130804"
         }
      ],
      "datetime" : "2016-10-27T03:21:48"
   },
   {
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T03:22:00",
      "board" : [],
      "enbId" : "205",
      "oamIp" : "10.186.137.205"
   },
   {
      "oamIp" : "10.186.137.206",
      "cell" : [],
      "alarm" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:22:11",
      "enbId" : "206"
   },
   {
      "alarm" : [
         {
            "description" : "EquipmentSupportFunction=1 (Lost contact with the node that controls external alarms, power and climate HW, cabinetIdentifier:)",
            "severity" : "Maj",
            "problem" : "Disconnected"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "problem" : "PLMN Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellFDD=1 (PLMN mcc:555 mnc:1)"
         }
      ],
      "cell" : [
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=4",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED"
         },
         {
            "id" : "EUtranCellFDD=5",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=3"
         }
      ],
      "board" : [
         {
            "date" : "20130629",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "serial" : "D168382191",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "faultLED" : "OFF",
            "serial" : "CB4J975527",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RUS01B2",
            "date" : "20110808"
         }
      ],
      "datetime" : "2016-10-27T03:22:49",
      "enbId" : "207",
      "oamIp" : "10.186.137.207"
   },
   {
      "enbId" : "208",
      "datetime" : "2016-10-27T03:23:01",
      "board" : [],
      "alarm" : [],
      "cell" : [],
      "oamIp" : "10.186.137.208"
   },
   {
      "enbId" : "209",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "Disconnected",
            "description" : "ExternalNode=1 (hubPosition: C)"
         },
         {
            "severity" : "Maj",
            "problem" : "Disconnected",
            "description" : "HwUnit=PDU-1 (equipment_malfunction)"
         },
         {
            "severity" : "Maj",
            "problem" : "Disconnected",
            "description" : "HwUnit=PDU-2 (equipment_malfunction)"
         },
         {
            "severity" : "Maj",
            "problem" : "Disconnected",
            "description" : "HwUnit=SCU-1 (equipment_malfunction)"
         },
         {
            "description" : "HwUnit=SCU-2 (equipment_malfunction)",
            "problem" : "Disconnected",
            "severity" : "Maj"
         },
         {
            "description" : "HwUnit=SUP-1 (equipment_malfunction)",
            "severity" : "Maj",
            "problem" : "Disconnected"
         },
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)",
            "severity" : "Maj",
            "problem" : "Disk Volume D Full"
         },
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "description" : "EUtranCellFDD=1 (Configuration not valid due to Channel Bandwidth license shortage)",
            "severity" : "Maj",
            "problem" : "Resource Allocation Failure"
         },
         {
            "description" : "EUtranCellFDD=2 (Configuration not valid due to Channel Bandwidth license shortage)",
            "problem" : "Resource Allocation Failure",
            "severity" : "Maj"
         },
         {
            "description" : "EUtranCellFDD=3 (Configuration not valid due to Channel Bandwidth license shortage)",
            "severity" : "Maj",
            "problem" : "Resource Allocation Failure"
         },
         {
            "problem" : "Service Unavailable",
            "severity" : "Maj",
            "description" : "EUtranCellTDD=1 (underlying_resource_unavailable)"
         },
         {
            "severity" : "Maj",
            "problem" : "Service Unavailable",
            "description" : "EUtranCellTDD=2 (underlying_resource_unavailable)"
         },
         {
            "severity" : "Maj",
            "problem" : "Service Unavailable",
            "description" : "EUtranCellTDD=3 (underlying_resource_unavailable)"
         },
         {
            "severity" : "Min",
            "problem" : "Link Failure",
            "description" : "RiLink=1 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 1)"
         },
         {
            "problem" : "Link Failure",
            "severity" : "Min",
            "description" : "RiLink=2 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 0)"
         },
         {
            "description" : "RiLink=3 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 2)",
            "severity" : "Min",
            "problem" : "Link Failure"
         },
         {
            "severity" : "Min",
            "problem" : "Link Failure",
            "description" : "RiLink=4 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 3)"
         },
         {
            "problem" : "Link Failure",
            "severity" : "Min",
            "description" : "RiLink=5 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 5)"
         },
         {
            "description" : "RiLink=6 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 4)",
            "problem" : "Link Failure",
            "severity" : "Min"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=3",
            "opState" : "DISABLED"
         },
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=2",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1"
         },
         {
            "id" : "EUtranCellTDD=3",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         }
      ],
      "board" : [],
      "datetime" : "2016-10-27T03:23:17",
      "oamIp" : "10.186.137.209"
   },
   {
      "enbId" : "210",
      "datetime" : "2016-10-27T03:23:38",
      "board" : [],
      "cell" : [],
      "alarm" : [],
      "oamIp" : "10.186.137.210"
   },
   {
      "enbId" : "211",
      "board" : [],
      "datetime" : "2016-10-27T03:23:49",
      "cell" : [],
      "alarm" : [],
      "oamIp" : "10.186.137.211"
   },
   {
      "enbId" : "212",
      "datetime" : "2016-10-27T03:24:30",
      "board" : [
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "A401957008",
            "maintLED" : "OFF",
            "boardType" : "DUS4101",
            "date" : "20121025"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16K238672",
            "date" : "20141107",
            "boardType" : "XMU0301"
         },
         {
            "date" : "20150115",
            "boardType" : "RRUS0ZB2",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "D16M138012",
            "operLED" : "ON"
         },
         {
            "date" : "20150115",
            "boardType" : "RRUS0ZB2",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D16M138011",
            "faultLED" : "OFF"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D165156164",
            "maintLED" : "OFF",
            "boardType" : "RUS02B8",
            "date" : "20130126"
         },
         {
            "date" : "20120717",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "serial" : "C826207781",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D165156177",
            "date" : "20130126",
            "boardType" : "RUS02B8"
         }
      ],
      "cell" : [
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=1",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=2",
            "admState" : "LOCKED"
         }
      ],
      "alarm" : [
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)",
            "severity" : "Maj",
            "problem" : "Disk Volume D Full"
         },
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP server configuration problem)"
         }
      ],
      "oamIp" : "10.186.137.212"
   },
   {
      "oamIp" : "10.186.137.213",
      "enbId" : "213",
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:24:42"
   },
   {
      "enbId" : "214",
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D169507302",
            "date" : "20130824",
            "boardType" : "RRUS0ZB2"
         },
         {
            "faultLED" : "OFF",
            "serial" : "CB4P452734",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "RUS02B8",
            "date" : "20121126"
         },
         {
            "boardType" : "DUS4101",
            "date" : "20130216",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D165589694",
            "maintLED" : "OFF"
         },
         {
            "date" : "20150610",
            "boardType" : "RRUS32B3",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D16Q358509",
            "faultLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "D169507301",
            "operLED" : "ON",
            "date" : "20130824",
            "boardType" : "RRUS0ZB2"
         }
      ],
      "datetime" : "2016-10-27T03:25:21",
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP server configuration problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         },
         {
            "severity" : "Min",
            "problem" : "Password File Fault",
            "description" : "Security=1 (configuration_or_customizing_error)"
         }
      ],
      "cell" : [
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=3"
         },
         {
            "opState" : "ENABLED",
            "id" : "EUtranCellFDD=2",
            "admState" : "UNLOCKED"
         },
         {
            "opState" : "ENABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED"
         },
         {
            "opState" : "ENABLED",
            "id" : "EUtranCellFDD=4",
            "admState" : "UNLOCKED"
         }
      ],
      "oamIp" : "10.186.137.214"
   },
   {
      "cell" : [],
      "alarm" : [],
      "datetime" : "2016-10-27T03:25:33",
      "board" : [],
      "enbId" : "215",
      "oamIp" : "10.186.137.215"
   },
   {
      "oamIp" : "10.186.137.216",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T03:25:45",
      "board" : [],
      "enbId" : "216"
   },
   {
      "cell" : [],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         }
      ],
      "datetime" : "2016-10-27T03:26:21",
      "board" : [
         {
            "date" : "20121024",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "A401956226",
            "faultLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16Q786364",
            "date" : "20150819",
            "boardType" : "RRUS32B2"
         }
      ],
      "enbId" : "217",
      "oamIp" : "10.186.137.217"
   },
   {
      "oamIp" : "10.186.137.218",
      "enbId" : "218",
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP synchronize time failure (changed server/step))",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "severity" : "Min",
            "problem" : "HW Fault",
            "description" : "AuxPlugInUnit=RRU-1,DeviceGroup=ru (Fault from antsys, evaluated as fault on ruDG. Voltage out of range [ A B C D RET ])"
         },
         {
            "severity" : "Min",
            "problem" : "No Connection",
            "description" : "AntennaUnitGroup=1,AntennaNearUnit=1 (Timeout: Failed to get anuConnectIndication)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "severity" : "Min",
            "problem" : "Password File Fault"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellFDD=2",
            "opState" : "ENABLED"
         },
         {
            "opState" : "ENABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED"
         }
      ],
      "board" : [
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "A401956232",
            "date" : "20121024",
            "boardType" : "DUS4101"
         }
      ],
      "datetime" : "2016-10-27T03:27:35"
   },
   {
      "oamIp" : "10.186.137.219",
      "alarm" : [],
      "cell" : [],
      "board" : [],
      "datetime" : "2016-10-27T03:27:48",
      "enbId" : "219"
   },
   {
      "board" : [],
      "datetime" : "2016-10-27T03:28:03",
      "cell" : [],
      "alarm" : [],
      "enbId" : "220",
      "oamIp" : "10.186.137.220"
   },
   {
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=2",
            "admState" : "UNLOCKED"
         },
         {
            "id" : "EUtranCellFDD=1",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "severity" : "Maj",
            "problem" : "Resource Allocation Failure",
            "description" : "EUtranCellFDD=1 (Configuration not valid due to Channel Bandwidth license shortage)"
         },
         {
            "description" : "EUtranCellFDD=2 (Configuration not valid due to Channel Bandwidth license shortage)",
            "severity" : "Maj",
            "problem" : "Resource Allocation Failure"
         }
      ],
      "board" : [
         {
            "date" : "20130803",
            "boardType" : "DUS3101",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "D169102939",
            "operLED" : "ON"
         },
         {
            "date" : "20150309",
            "boardType" : "RRUS12B1",
            "maintLED" : "OFF",
            "serial" : "D16N582519",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D16N582517",
            "date" : "20150309",
            "boardType" : "RRUS12B1"
         }
      ],
      "datetime" : "2016-10-27T03:28:45",
      "enbId" : "221",
      "oamIp" : "10.186.137.221"
   },
   {
      "oamIp" : "10.186.137.222",
      "enbId" : "222",
      "board" : [
         {
            "boardType" : "RRUS02B0",
            "date" : "20120113",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "C825618554",
            "maintLED" : "OFF"
         },
         {
            "boardType" : "RRUS02B0",
            "date" : "20120410",
            "faultLED" : "OFF",
            "serial" : "C826005440",
            "operLED" : "ON",
            "maintLED" : "OFF"
         },
         {
            "operLED" : "ON",
            "serial" : "D169102941",
            "faultLED" : "OFF",
            "maintLED" : "OFF",
            "boardType" : "DUS3101",
            "date" : "20130803"
         },
         {
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "C825851825",
            "operLED" : "ON",
            "date" : "20120307",
            "boardType" : "RRUS02B0"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "C826121523",
            "maintLED" : "OFF",
            "boardType" : "RRUS02B0",
            "date" : "20120614"
         },
         {
            "boardType" : "RRUS02B0",
            "date" : "20120307",
            "operLED" : "ON",
            "serial" : "C825851832",
            "faultLED" : "OFF",
            "maintLED" : "OFF"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D821337183",
            "maintLED" : "OFF",
            "boardType" : "RRUS13B7",
            "date" : "20150701"
         },
         {
            "date" : "20120423",
            "boardType" : "RRUS02B0",
            "maintLED" : "OFF",
            "faultLED" : "OFF",
            "serial" : "C826021231",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "serial" : "CA72329396",
            "faultLED" : "OFF",
            "operLED" : "ON",
            "date" : "20150121",
            "boardType" : "RRUS12B7"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CA72329415",
            "maintLED" : "OFF",
            "boardType" : "RRUS12B7",
            "date" : "20150121"
         }
      ],
      "datetime" : "2016-10-27T03:29:36",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "Clock Calibration Expiry Soon",
            "description" : "Synchronization=1 (Cause: 2016-09-17)"
         },
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "problem" : "Network Synch Time from GPS Missing",
            "severity" : "Maj",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,TimingUnit=1,GpsSyncRef=gps (Cause: No messages received from the GPS antenna)"
         },
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,DeviceGroup=dul (System clock not locked to RAN time)",
            "problem" : "TimingSyncFault",
            "severity" : "Maj"
         }
      ],
      "cell" : [
         {
            "id" : "EUtranCellFDD=9",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=8",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellTDD=2",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=4",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellTDD=3",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=5",
            "admState" : "LOCKED"
         },
         {
            "id" : "EUtranCellFDD=6",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=1",
            "admState" : "LOCKED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=7",
            "opState" : "DISABLED"
         }
      ]
   },
   {
      "oamIp" : "10.186.137.223",
      "datetime" : "2016-10-27T03:30:12",
      "board" : [
         {
            "faultLED" : "OFF",
            "serial" : "D169160146",
            "operLED" : "05HZ",
            "maintLED" : "OFF",
            "boardType" : "DUS3101",
            "date" : "20130805"
         }
      ],
      "alarm" : [
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1 (Disk almost full Total space: 976 MB Volume free space limit: 100 MB)",
            "problem" : "Disk Volume D Full",
            "severity" : "Maj"
         },
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "ManagedElementData=1 (additionalInfo: NTP general problem)"
         },
         {
            "problem" : "ResourceAllocationFailure",
            "severity" : "Maj",
            "description" : "EUtranCellTDD=1 (Configuration not valid due to Channel Bandwidth license shortage)"
         },
         {
            "problem" : "LinkFailure",
            "severity" : "Min",
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,RiPort=A (No signal detected, id 1, unitId 1, ruPortNo 0)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "problem" : "Password File Fault",
            "severity" : "Min"
         }
      ],
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "DISABLED"
         }
      ],
      "enbId" : "223"
   },
   {
      "cell" : [
         {
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1",
            "opState" : "ENABLED"
         }
      ],
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         }
      ],
      "datetime" : "2016-10-27T03:30:38",
      "board" : [
         {
            "date" : "20120822",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "C826307262",
            "faultLED" : "OFF"
         },
         {
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "CB4N995651",
            "maintLED" : "OFF",
            "boardType" : "RRUL62B40A",
            "date" : "20121010"
         }
      ],
      "enbId" : "224",
      "oamIp" : "10.186.137.224"
   },
   {
      "enbId" : "225",
      "alarm" : [],
      "cell" : [],
      "datetime" : "2016-10-27T03:30:50",
      "board" : [],
      "oamIp" : "10.186.137.225"
   },
   {
      "oamIp" : "10.186.137.226",
      "enbId" : "226",
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "Inter-PIU Link Fault",
            "description" : "InterPiuLink=1 (Cable fault Message: No connection)"
         },
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj"
         }
      ],
      "cell" : [
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=6",
            "admState" : "LOCKED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=5",
            "admState" : "LOCKED"
         },
         {
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=3",
            "opState" : "DISABLED"
         },
         {
            "id" : "EUtranCellFDD=2",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         },
         {
            "opState" : "DISABLED",
            "admState" : "LOCKED",
            "id" : "EUtranCellFDD=4"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=1",
            "admState" : "LOCKED"
         }
      ],
      "datetime" : "2016-10-27T03:31:25",
      "board" : [
         {
            "date" : "20130524",
            "boardType" : "DUS4101",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "A402057910",
            "faultLED" : "OFF"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D169793573",
            "faultLED" : "OFF",
            "date" : "20130907",
            "boardType" : "RRUS11B1"
         }
      ]
   },
   {
      "cell" : [
         {
            "opState" : "ENABLED",
            "admState" : "UNLOCKED",
            "id" : "EUtranCellTDD=1"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellTDD=3",
            "admState" : "LOCKED"
         },
         {
            "opState" : "DISABLED",
            "id" : "EUtranCellFDD=2",
            "admState" : "LOCKED"
         }
      ],
      "alarm" : [
         {
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "problem" : "Link Failure",
            "severity" : "Min",
            "description" : "RiLink=3 (No SFP plugged in, additionalData: id 1, unitId 1, portNo 2)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "severity" : "Min",
            "problem" : "Password File Fault"
         }
      ],
      "board" : [
         {
            "boardType" : "DUS4101",
            "date" : "20130629",
            "operLED" : "ON",
            "faultLED" : "OFF",
            "serial" : "D168382200",
            "maintLED" : "OFF"
         },
         {
            "date" : "20120815",
            "boardType" : "TRANSCEIVER",
            "maintLED" : "OFF",
            "serial" : "CB4N520287",
            "faultLED" : "OFF",
            "operLED" : "ON"
         },
         {
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "D820316387",
            "faultLED" : "OFF",
            "date" : "20141221",
            "boardType" : "RRUS12B1"
         }
      ],
      "datetime" : "2016-10-27T03:31:56",
      "enbId" : "227",
      "oamIp" : "10.186.137.227"
   },
   {
      "oamIp" : "10.186.137.228",
      "enbId" : "228",
      "cell" : [
         {
            "id" : "EUtranCellTDD=1",
            "admState" : "LOCKED",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "problem" : "NTP System Time Sync Fault",
            "severity" : "Maj",
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "severity" : "Min",
            "problem" : "Password File Fault"
         }
      ],
      "board" : [
         {
            "date" : "20121122",
            "boardType" : "RRUL62B40A",
            "maintLED" : "OFF",
            "operLED" : "ON",
            "serial" : "CB4P420479",
            "faultLED" : "OFF"
         },
         {
            "faultLED" : "OFF",
            "serial" : "D168382206",
            "operLED" : "ON",
            "maintLED" : "OFF",
            "boardType" : "DUS4101",
            "date" : "20130629"
         }
      ],
      "datetime" : "2016-10-27T03:32:23"
   },
   {
      "oamIp" : "10.186.137.229",
      "cell" : [
         {
            "id" : "EUtranCellTDD=1",
            "admState" : "UNLOCKED",
            "opState" : "DISABLED"
         }
      ],
      "alarm" : [
         {
            "description" : "TimeSetting=1 (NTP sync alarm Message: NTP general problem)",
            "severity" : "Maj",
            "problem" : "NTP System Time Sync Fault"
         },
         {
            "severity" : "Maj",
            "problem" : "ResourceAllocationFailure",
            "description" : "EUtranCellTDD=1 (Configuration not valid due to Channel Bandwidth license shortage)"
         },
         {
            "description" : "Subrack=1,Slot=1,PlugInUnit=1,RiPort=A (No signal detected, id 1, unitId 1, ruPortNo 0)",
            "problem" : "LinkFailure",
            "severity" : "Min"
         },
         {
            "description" : "Security=1 (configuration_or_customizing_error)",
            "severity" : "Min",
            "problem" : "Password File Fault"
         }
      ],
      "board" : [
         {
            "serial" : "D16A842779",
            "faultLED" : "OFF",
            "operLED" : "05HZ",
            "maintLED" : "OFF",
            "boardType" : "DUS3101",
            "date" : "20131031"
         }
      ],
      "datetime" : "2016-10-27T03:32:56",
      "enbId" : "229"
   }
];
*/

@Injectable()
export class NodeService {
  private headers = new Headers({'Content-Type' : 'application/json'});
  private enbUrl = '/testrat/enblist';
  private enbDetailUrl = '/testrat/enbdetail';

  constructor(private http : Http) {
  }

  getNodes() : Promise<Node[]> {
    return this.http.get(this.enbUrl)
           .toPromise()
           .then(response => this.validateMany(response.json()))
           .catch(this.handleError);
  }

  create(enbId : string, oamIp : string) : Promise<Node> {
    return this.http.post(this.enbUrl + "/",
                          JSON.stringify({enbId : enbId, oamIp : oamIp}),
                          {headers : this.headers})
           .toPromise()
           .then(res => this.validate(res.json()))
           .catch(this.handleError);
  }

  update(node : Node) : Promise<Node> {
    const url = `${this.enbDetailUrl}/${node.enbId}/`;
    return this.http.put(url, JSON.stringify(node), {headers : this.headers})
           .toPromise()
           .then(() => this.validate(node))
           .catch(this.handleError);
  }

  delete(enbId : string) : Promise<void> {
    const url = `${this.enbDetailUrl}/${enbId}/`;
    return this.http.delete(url, {headers : this.headers})
           .toPromise()
           .then(() => null)
           .catch(this.handleError);
  }

  private handleError(error : any) : Promise<any> {
    console.error('NodeService.error', error);
    return Promise.reject(error.message || error);
  }

  private validate(data) : Node {
    var n = new Node();
    console.log(data, n);
    for (var k in data) {
      n[k] = data[k];
    }
    return n;
  }

  private validateMany(data) : Node[] {
    var r : Node[] = [];
    for (var x in data) {
      var n = this.validate(data[x]);
      r.push(n);
    }
    return r;
  }
}
