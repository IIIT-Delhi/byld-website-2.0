import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuContent,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import clgLogo from "../assets/iiitd-logo.png";
import byldLogo from "../assets/byld-logo.png";

export default function Navbar() {
	return (
		<div className="flex sticky bg-white z-50 bg-opacity-20 backdrop-blur-xl top-0 flex-row items-center justify-between h-[96px] py-[27px] md:px-16 sm:px-10 px-2.5 ">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 43 32"
								fill="none"
							>
								<path
									d="M42.125 16C42.125 16.4558 41.9439 16.893 41.6216 17.2153C41.2993 17.5377 40.8621 17.7188 40.4062 17.7188H2.59375C2.13791 17.7188 1.70074 17.5377 1.37841 17.2153C1.05608 16.893 0.875 16.4558 0.875 16C0.875 15.5442 1.05608 15.107 1.37841 14.7847C1.70074 14.4623 2.13791 14.2812 2.59375 14.2812H40.4062C40.8621 14.2812 41.2993 14.4623 41.6216 14.7847C41.9439 15.107 42.125 15.5442 42.125 16ZM2.59375 3.96875H40.4062C40.8621 3.96875 41.2993 3.78767 41.6216 3.46534C41.9439 3.14301 42.125 2.70584 42.125 2.25C42.125 1.79416 41.9439 1.35699 41.6216 1.03466C41.2993 0.712332 40.8621 0.53125 40.4062 0.53125H2.59375C2.13791 0.53125 1.70074 0.712332 1.37841 1.03466C1.05608 1.35699 0.875 1.79416 0.875 2.25C0.875 2.70584 1.05608 3.14301 1.37841 3.46534C1.70074 3.78767 2.13791 3.96875 2.59375 3.96875ZM40.4062 28.0312H2.59375C2.13791 28.0312 1.70074 28.2123 1.37841 28.5347C1.05608 28.857 0.875 29.2942 0.875 29.75C0.875 30.2058 1.05608 30.643 1.37841 30.9653C1.70074 31.2877 2.13791 31.4688 2.59375 31.4688H40.4062C40.8621 31.4688 41.2993 31.2877 41.6216 30.9653C41.9439 30.643 42.125 30.2058 42.125 29.75C42.125 29.2942 41.9439 28.857 41.6216 28.5347C41.2993 28.2123 40.8621 28.0312 40.4062 28.0312Z"
									fill="black"
								/>
							</svg>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="flex p-1 items-center justify-center flex-col space-y-3">
								<li
									className={cn(
										"w-full px-3 py-1.5 text-sm",
										navigationMenuTriggerStyle(),
									)}
								>
									<NavigationMenuLink asChild>
										<a href="/" className="text-sm p-2 font-spaceGrotesk">
											Link
										</a>
									</NavigationMenuLink>
								</li>
								<li
									className={cn(
										"w-full px-3 py-1.5 text-sm",
										navigationMenuTriggerStyle(),
									)}
								>
									<a href="/#" className="font-spaceGrotesk">
										Members
									</a>
								</li>
								<li
									className={cn(
										"w-full px-3 py-1.5 text-sm",
										navigationMenuTriggerStyle(),
									)}
								>
									<a href="/#" className="font-spaceGrotesk ">
										Events
									</a>
								</li>
								<li
									className={cn(
										"w-full px-3 py-1.5 text-sm",
										navigationMenuTriggerStyle(),
									)}
								>
									<a href="/#" className="font-spaceGrotesk">
										Projects
									</a>
								</li>{" "}
								<li
									className={cn(
										"w-full px-3 py-1.5 text-sm",
										navigationMenuTriggerStyle(),
									)}
								>
									<a href="/#" className="font-spaceGrotesk">
										Contact Us
									</a>
								</li>
							</ul>{" "}
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="hidden md:flex flex-row gap-6 items-center">
				<a
					href="https://studentcouncil.iiitd.edu.in/clubs.html"
					target="_blank"
				>
					<img src={byldLogo.src} alt="byld-logo" className="h-5" />
				</a>
				<div className="w-0.5 h-7 bg-[#3FAEA8]"></div>
				<a href="https://iiitd.ac.in" target="_blank">
					<img className="h-5" src={clgLogo.src} alt="iiitd-logo" />
				</a>
			</div>
		</div>
	);
}
