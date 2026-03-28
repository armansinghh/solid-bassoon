import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Card from "./components/ui/Card";
import Badge from "./components/ui/Badge";
import EmptyState from "./components/ui/EmptyState";
import Spinner from "./components/ui/Spinner";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-2xl font-bold">Component Playground</h1>

      {/* BUTTONS */}
      <Card>
        <h2 className="font-semibold mb-3">Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button loading>Loading</Button>
        </div>
      </Card>

      {/* INPUTS */}
      <Card>
        <h2 className="font-semibold mb-3">Inputs</h2>
        <div className="space-y-4 max-w-md">
          <Input label="Username" placeholder="Enter username" />
          <Input
            label="Email"
            placeholder="Enter email"
            helper="We’ll never share your email."
          />
          <Input
            label="Password"
            type="password"
            error="Password must be at least 6 characters"
          />
        </div>
      </Card>

      {/* BADGES */}
      <Card>
        <h2 className="font-semibold mb-3">Badges</h2>
        <div className="flex gap-2 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </Card>

      {/* EMPTY STATE */}
      <Card>
        <h2 className="font-semibold mb-3">Empty State</h2>
        <EmptyState
          title="No items found"
          description="Try adding a new item to get started."
          action={<Button>Add Item</Button>}
        />
      </Card>

      {/* SPINNER */}
      <Card>
        <h2 className="font-semibold mb-3">Loading State</h2>
        <Spinner />
      </Card>
    </div>
  );
}