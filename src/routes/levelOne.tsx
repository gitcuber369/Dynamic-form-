import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function LevelOne() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [attendingWithGuest, setAttendingWithGuest] = useState<string>("");
  const [guestName, setGuestName] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});

  const handleRadioChange = (value: string) => {
    setAttendingWithGuest(value);
    setShowInput(value === "yes");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      age,
      attendingWithGuest,
      guestName,
    };
    setFormData(formData);
    setShowPopup(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>
            <h1>Event Registration</h1>
          </CardTitle>
          <CardDescription>
            <p>Registration form to register for an event</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="example@ex.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Age</Label>
                <Input
                  type="number"
                  placeholder="Enter your age"
                  min={0}
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Are you Attending with a guest?</Label>
                <RadioGroup
                  value={attendingWithGuest}
                  onValueChange={handleRadioChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="yes" value="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="no" value="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
                {showInput && (
                  <div className="gap-y-2 mt-2">
                    <Label>Guest Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter guest's name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-evenly">
                <Button type="submit">Submit</Button>
                {showPopup && (
                  <>
                    <Dialog>
                      <DialogTrigger>
                        <Button>Show Details</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Details of the form</DialogTitle>
                          <DialogDescription>
                            Here are the result of the data you filled in the
                            form
                          </DialogDescription>
                        </DialogHeader>

                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Age: {formData.age}</p>
                        <p>
                          Attending with Guest: {formData.attendingWithGuest}
                        </p>
                        {formData.attendingWithGuest === "yes" && (
                          <p>Guest Name: {formData.guestName}</p>
                        )}
                      </DialogContent>
                    </Dialog>
                  </>
                )}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LevelOne;
