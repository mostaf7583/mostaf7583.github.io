import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // 👈 CHANGE HERE
import { MainLayout } from "@/components/layout/MainLayout";
import Index from "./pages/Index";
import Trucks from "./pages/Trucks";
import Drivers from "./pages/Drivers";
import Trips from "./pages/Trips";
import FuelRecords from "./pages/FuelRecords";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";
import BusinessSystem from "./pages/BusinessSystem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* 👈 CHANGE HERE */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trucks" element={<MainLayout><Trucks /></MainLayout>} />
          <Route path="/drivers" element={<MainLayout><Drivers /></MainLayout>} />
          <Route path="/trips" element={<MainLayout><Trips /></MainLayout>} />
          <Route path="/fuel" element={<MainLayout><FuelRecords /></MainLayout>} />
          <Route path="/maintenance" element={<MainLayout><Maintenance /></MainLayout>} />
          <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
          <Route path="/business" element={<MainLayout><BusinessSystem /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
