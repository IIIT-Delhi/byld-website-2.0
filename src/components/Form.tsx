"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Label } from "./ui/label";

const FormSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
});

export default function InputForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	// return (
	// 	<Form {...form}>
	// 		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
	// 			<FormField
	// 				control={form.control}
	// 				name="username"
	// 				render={({ field }) => (
	// 					<FormItem>
	// 						<FormLabel className="text-[#56ccc4]">Email</FormLabel>
	// 						<FormControl>
	// 							<Input placeholder="eg: fireserpent@iiitd.ac.in" {...field} />
	// 						</FormControl>
	// 					</FormItem>
	// 				)}
	// 			/>
	// 			<Button type="submit">Submit</Button>
	// 		</form>
	// 	</Form>
	// );
	return (
		<form action="">
			<Label htmlFor="email" className="text-[#56ccc4]">
				Email
			</Label>
			<Input
				id="email"
				type="email"
				placeholder="eg: fireserpent@iiitd.ac.in"
			/>
		</form>
	);
}
