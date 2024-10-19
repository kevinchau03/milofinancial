import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
  } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  interface InfoCardProps {
    title: string;
    amount: number;
    footer: React.ReactNode; // Allows anything to be passed as footer (e.g., button, text, etc.)
  }
  
  export default function InfoCard({ title, amount, footer }: InfoCardProps) {
    return (
        <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${amount}</div>
          <p className="text-xs text-muted-foreground">
            {footer}
          </p>
        </CardContent>
      </Card>
    );
  }
  