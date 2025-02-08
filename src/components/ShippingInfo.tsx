// import React from 'react';
// import { Info } from 'lucide-react';

// const ShippingInfo = () => {
//   return (
//     <div className="max-w-xl p-4 font-sans">
//       {/* Shipping Section */}
//       <div className="mb-4">
//         <div className="flex items-baseline mb-2">
//           <dt className="w-24 font-medium">Shipping: </dt>
//           <dd className="flex items-center">
//             <span>US $18.33 eBay International Shipping</span>
//             <Info className="w-4 h-4 ml-1 text-gray-500" />
//           </dd>
//         </div>
//         {/* <div className="ml-5 text-gray-600 mb-2">
//           Located in: Vandalia, OH, United States
//         </div>
//         <div className="ml-5 mb-2">
//           <div className="flex items-center text-gray-600">
//             Save on combined shipping
//             <Info className="w-4 h-4 ml-1" />
//           </div>
//         </div> */}
//         {/* <div className="ml-5 text-gray-600 flex items-center">
//           Authorities may apply duties, fees, and taxes upon delivery
//           <Info className="w-4 h-4 ml-1" />
//         </div> */}
//       </div>

//       {/* Delivery Section */}
//       <div className="mb-4">
//         <div className="flex items-baseline">
//           <dt className="w-24 font-medium">Delivery:</dt>
//           <dd>
//             {/* <div className="flex items-center">
//               <span className="bg-yellow-100 px-1 mr-2">📦</span>
//               Estimated between Mon, Mar 17 and Thu, Apr 3
//               <Info className="w-4 h-4 ml-1 text-gray-500" />
//             </div> */}
//             <div className=" mt-1">
//               Please note the delivery estimate is <span className="font-medium text-black">greater than 2-4 business days.</span>
//             </div>
//           </dd>
//         </div>
//       </div>

//       {/* Returns Section */}
//       <div className="mb-4">
//         <div className="flex items-baseline">
//           <dt className="w-24 font-medium">Returns:</dt>
//           <dd>
//             30 days returns. Buyer pays for return shipping. If you use an eBay shipping label, it will be deducted from your refund amount.
//           </dd>
//         </div>
//       </div>

//       {/* Payments Section */}
//       <div className="flex items-baseline">
//         <dt className="w-24 font-medium">Payments:</dt>
//         <dd className="flex gap-2">
//           <div className="flex items-center space-x-2">
//             {/* Payment method icons using colored backgrounds to simulate logos */}
//             <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">PayPal</div>
//             <div className="w-12 h-8 bg-white border rounded flex items-center justify-center text-xs">GPay</div>
//             <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-xs">VISA</div>
//           </div>
//         </dd>
//       </div>
//     </div>
//   );
// };

// export default ShippingInfo;

import React from 'react';
import { Info } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="w-72 p-3 font-sans text-sm border rounded-lg shadow-sm">
      {/* Shipping Section */}
      <div className="mb-3">
        <div className="flex items-center mb-1">
          <span className="font-medium mr-2 w-16">Shipping:</span>
          <span className="flex-grow flex items-center">
            US $18.33 International
            <Info className="w-3 h-3 ml-1 text-gray-500" />
          </span>
        </div>
        <div className="pl-16 text-gray-600 text-xs mb-1">
          Located in: Vandalia, OH, United States
        </div>
        <div className="pl-16 mb-1">
          <div className="flex items-center text-gray-600 text-xs">
            Save on combined shipping
            <Info className="w-3 h-3 ml-1" />
          </div>
        </div>
        <div className="pl-16 text-gray-600 text-xs flex items-center">
          Authorities may apply duties, fees, and taxes
          <Info className="w-3 h-3 ml-1" />
        </div>
      </div>

      {/* Delivery Section */}
      <div className="mb-3">
        <div className="flex items-center">
          <span className="font-medium mr-2 w-16">Delivery:</span>
          <div>
            <div className="flex items-center">
              <span className="bg-yellow-100 px-1 mr-2 text-xs">📦</span>
              <span className="text-xs">Est. Mon, Mar 17 to Thu, Apr 3</span>
              <Info className="w-3 h-3 ml-1 text-gray-500" />
            </div>
            <div className="text-gray-600 text-xs mt-1">
              Delivery over <span className="font-medium">24 business days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Returns Section */}
      <div className="mb-3">
        <div className="flex">
          <span className="font-medium mr-2 w-16">Returns:</span>
          <span className="text-xs flex-grow">
            30 days returns. Buyer pays return shipping. eBay label fees deducted from refund.
          </span>
        </div>
      </div>

      {/* Payments Section */}
      <div className="flex">
        <span className="font-medium mr-2 w-16">Payments:</span>
        <div className="flex gap-1">
          {['PayPal', 'GPay', 'VISA', 'MC', 'Disc', 'Diners'].map((payment, index) => (
            <div 
              key={payment} 
              className="w-8 h-5 rounded flex items-center justify-center text-[10px] font-bold
              {index === 0 ? 'bg-blue-600 text-white' : 
               index === 1 ? 'bg-white border' : 
               index === 2 ? 'bg-blue-700 text-white' : 
               index === 3 ? 'bg-red-500 text-white' : 
               index === 4 ? 'bg-orange-500 text-white' : 
               'bg-gray-200'}"
            >
              {payment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;