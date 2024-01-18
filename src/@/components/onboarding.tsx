/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VZU1rdwkvub
 */
import { Label } from "~/@/components/ui/label"
import { Input } from "~/@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "~/@/components/ui/select"
import { Button } from "~/@/components/ui/button"
import NavigationLayout from "./navigation-layout"

export function Onboarding() {
  return (
    <NavigationLayout>
    <div className="mx-auto max-w-sm space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome to Finance Tracker</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthly-income">Monthly Income</Label>
          <Input id="monthly-income" placeholder="Enter your monthly income" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthly-expenses">Monthly Expenses</Label>
          <Input id="monthly-expenses" placeholder="Enter your monthly expenses" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency">Weekly Pay Term</Label>
          <Select>
            <SelectTrigger aria-label="weeklyPayTerm" id="weeklyPayTerm">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="biweekly">Bi-Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </div>
    </div>
    </NavigationLayout>
  )
}
