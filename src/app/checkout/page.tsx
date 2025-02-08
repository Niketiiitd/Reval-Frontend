"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Checkout() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div>
        <h2>Pay with</h2>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Add a new card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Paytm</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Paypal</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h1>Ship To</h1>
        <div>{/* address comes here */}</div>

        <div>
          {/* product comes here */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Avatar name </AvatarFallback>
          </Avatar>

          <div>
            <img src="" alt="" />
            <h2>product name</h2>

            <div>product price</div>

            <div>product quanity</div>
          </div>
          <div>
            <h1>
              Gift and coupons
              <Input type="email" placeholder="Email" />
              <button>
                apply
                {/* handle submission logic here */}
              </button>
            </h1>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
