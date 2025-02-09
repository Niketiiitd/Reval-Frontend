"use client"
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const CategoryContext = createContext();

// Your category data
const categoryData = {
  'Computers&Accessories': ['USBCables', 'WirelessUSBAdapters', 'DVICables', 'CableConnectionProtectors', 'CameraPrivacyCovers', 'PenDrives', 'Mice', 'GraphicTablets', 'Lapdesks', 'NotebookComputerStands', 'Keyboards', 'Keyboard&MouseSets', 'ExternalHardDisks', 'Repeaters&Extenders', 'InkjetInkCartridges', 'DustCovers', 'GamingMice', 'MousePads', 'HardDiskBags', 'NetworkingDevices', 'Routers', 'BluetoothAdapters', 'USBtoUSBAdapters', 'Monitors', 'Lamps', 'ScreenProtectors', 'Gamepads', 'USBHubs', 'PCMicrophones', 'LaptopSleeves&Slipcases', 'ExternalMemoryCardReaders', 'EthernetCables', 'Memory', 'UninterruptedPowerSupplies', 'Webcams', 'CoolingPads', 'LaptopAccessories', 'Stands', 'InternalSolidStateDrives', 'DataCards&Dongles', 'LaptopChargers&PowerSupplies', 'PCSpeakers', 'Cases', 'InternalHardDrives', 'Printers', 'SATACables', 'PCHeadsets', 'GamingKeyboards', 'InkjetPrinters', 'Headsets', 'ExternalSolidStateDrives', 'PowerLANAdapters', 'InkjetInkRefills&Kits', 'Tablets', 'TonerCartridges', 'Caddies', 'TraditionalLaptops'],
  'Electronics': ['HDMICables', 'SmartTelevisions', 'RemoteControls', 'StandardTelevisions', 'TVWall&CeilingMounts', 'RCACables', 'Mounts', 'OpticalCables', 'Projectors', 'Adapters', 'SatelliteReceivers', 'SpeakerCables', 'StreamingClients', 'AVReceivers&Amplifiers', 'TowerSpeakers', '3DGlasses', 'SmartWatches', 'PowerBanks', 'Smartphones', 'MicroSD', 'BasicMobiles', 'In-Ear', 'AutomobileChargers', 'Cradles', 'WallChargers', 'OTGAdapters', 'Tripods', 'SelfieSticks', 'Stands', 'Décor', 'ScreenProtectors', 'StylusPens', 'Bedstand&DeskMounts', 'BasicCases', 'HandlebarMounts', 'On-Ear', 'PhoneCharms', 'Shower&WallMounts', 'DisposableBatteries', 'VideoCameras', 'Tabletop&TravelTripods', 'TripodLegs', 'Macro&RinglightFlashes', 'Over-Ear', 'BluetoothSpeakers', 'GeneralPurposeBatteries&BatteryChargers', 'RechargeableBatteries', 'CompleteTripodUnits', 'Film', 'CleaningKits', 'DomeCameras', 'OutdoorSpeakers', 'Cases', 'SecureDigitalCards', 'SelfieLights', 'MultimediaSpeakerSystems', 'BatteryChargers', 'SoundbarSpeakers', 'Earpads', 'BackgroundSupports', 'SurgeProtectors'],
  'MusicalInstruments': ['Condenser'],
  'OfficeProducts': ['GelInkRollerballPens', 'Scientific', 'WireboundNotebooks', 'Notepads&MemoBooks', 'Basic', 'BottledInk', 'CompositionNotebooks', 'RetractableBallpointPens', 'ColouredPaper', 'StickBallpointPens', 'Notebooks,WritingPads&Diaries', 'Financial&Business', 'LiquidInkRollerballPens', 'FountainPens'],
  'Home&Kitchen': ['Tape', 'Paints', 'WoodenPencils', 'Pens', 'PaintingMaterials', 'ElectricKettles', 'ElectricHeaters', 'FanHeaters', 'LintShavers', 'DigitalKitchenScales', 'Choppers', 'InductionCooktop', 'HandBlenders', 'DryIrons', 'MixerGrinders', 'InstantWaterHeaters', 'RoomHeaters', 'Kettle&ToasterSets', 'StorageWaterHeaters', 'ImmersionRods', 'AirFryers', 'LaundryBaskets', 'SteamIrons', 'JuicerMixerGrinders', 'HandheldVacuums', 'EggBoilers', 'SandwichMakers', 'MiniFoodProcessors&Choppers', 'DigitalScales', 'VacuumSealers', 'CeilingFans', 'CanisterVacuums', 'PressureWashers,Steam&WindowCleaners', 'HalogenHeaters', 'Pop-upToasters', 'HeatConvectors', 'ElectricGrinders', 'ExhaustFans', 'DripCoffeeMachines', 'WaterPurifierAccessories', 'WaterCartridges', 'Rice&PastaCookers', 'Wet-DryVacuums', 'HEPAAirPurifiers', 'WaterFilters&Purifiers', 'LaundryBags', 'Sewing&EmbroideryMachines', 'SprayBottles', 'HandMixers', 'WetGrinders', 'OvenToasterGrills', 'Juicers', 'SmallKitchenAppliances', 'EspressoMachines', 'TableFans', 'MilkFrothers', 'Humidifiers', 'StandMixerAccessories', 'RoboticVacuums', 'YogurtMakers', 'ColdPressJuicers', 'Split-SystemAirConditioners', 'SmallApplianceParts&Accessories', 'WaffleMakers&Irons', 'StovetopEspressoPots', 'MeasuringSpoons', 'CoffeePresses', 'RotiMakers', 'FanParts&Accessories', 'StandMixers', 'PedestalFans', 'HandheldBags'],
  'HomeImprovement': ['Adapters&Multi-Outlets', 'CordManagement'],
  'Toys&Games': ['ColouringPens&Markers'],
  'Car&Motorbike': ['AirPurifiers&Ionizers'],
  'Health&PersonalCare': ['DigitalBathroomScales']
};

export const CategoryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const fetchProductsByCategory = async (mainCategory, subCategory) => {
    try {
      setLoading(true);
      setError(null);
      setSelectedMainCategory(mainCategory);
      setSelectedSubCategory(subCategory);
      
      const response = await axios.get('/api/products', {
        params: {
          main_category: mainCategory,
          sub_category: subCategory
        }
      });

      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoryContext.Provider 
      value={{ 
        categories: categoryData,
        products,
        loading,
        error,
        fetchProductsByCategory,
        selectedMainCategory,
        selectedSubCategory
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);