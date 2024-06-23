import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const items = [
  {
    id: "javascript",
    label: "JavaScript",
  },
  {
    id: "css",
    label: "CSS",
  },
  {
    id: "python",
    label: "Python",
  },
  {
    id: "c++",
    label: "C++",
  },
  {
    id: "typescript",
    label: "TypeScript",
  },
  {
    id: "none",
    label: "None",
  },
] as const;

const FormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(50, { message: "Email must be less than 50 characters" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }),
  position: z.string().min(3, { message: "Position must be selected" }),
  experience: z
    .number()
    .min(0, { message: "Experience must be greater than 0" })
    .max(50, { message: "Experience must be less than 50" })
    .optional(),
  portfolio: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .min(3, { message: "Portfolio must be at least 3 characters" })
    .max(50, { message: "Portfolio must be less than 50 characters" })
    .optional(),
  managementExperience: z
    .number()
    .min(0, { message: "Management Experience must be greater than 0" })
    .max(50, { message: "Management Experience must be less than 50" })
    .optional(),
  additionalSkills: z
    .array(z.string())
    .refine((value) => value.some((item) => item !== "none"), {
      message: "You have to select at least one item.",
    }),
});

type FormValues = z.infer<typeof FormSchema>;

function LevelTwo() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      position: "",
      experience: undefined,
      portfolio: undefined,
      managementExperience: undefined,
      additionalSkills: ["none"],
    },
  });

  const [selectedPosition, setSelectedPosition] = useState("");
  const [formData, setFormData] = useState<FormValues | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    setFormData(values);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex sm:justify-center sm:items-center">
      <Card className="lg:w-1/2 lg:my-auto gap-4 w-full mx-auto">
        <CardHeader>
          <CardTitle className="md:text-xl">Job Interview form</CardTitle>
          <CardDescription>
            Please fill in the form below to apply for the job.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Position */}
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setSelectedPosition(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select which position you want to apply for" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Developer">Developer</SelectItem>
                        <SelectItem value="Designer">Designer</SelectItem>
                        <SelectItem value="Manager">Manager</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {selectedPosition === "Developer" && (
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your experience"
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {selectedPosition === "Designer" && (
                <>
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your experience"
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="portfolio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your portfolio URL"
                            type="url"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              {selectedPosition === "Manager" && (
                <FormField
                  control={form.control}
                  name="managementExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Management Experience</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your management experience"
                          min={1}
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="additionalSkills"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Additional Skills</FormLabel>
                    </div>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="additionalSkills"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      {formData && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger />
          <DialogContent>
            <DialogTitle>Submitted Data</DialogTitle>
            <DialogDescription>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default LevelTwo;
