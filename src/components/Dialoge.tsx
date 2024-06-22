import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

function Dialoge({ ...props }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Show Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              Here are the Details of the User
            </DialogDescription>
          </DialogHeader>
          <p>props.data</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Dialoge;
