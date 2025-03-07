import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy-loaded pages
const Login = lazy(() => import("./pages/Login"));
const Logout = lazy(() => import("./pages/Logout"));
const EmployeeDashboard = lazy(() => import("./pages/EmployeeDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Employee Pages
const EmployeeProfile = lazy(() => import("./components/EmployeeProfile"));
const AttendanceHistory = lazy(() => import("./components/AttendanceHistory"));
const SalaryDetails = lazy(() => import("./components/SalaryDetails"));
const LeaveManagement = lazy(() => import("./components/LeaveManagement"));
const ChangePassword = lazy(() => import("./components/ChangePassword"));
const Notifications = lazy(() => import("./components/Notifications"));
const HelpSupport = lazy(() => import("./components/HelpSupport"));
const TaskManagement = lazy(() => import("./components/TaskManagement"));
const WorkSchedule = lazy(() => import("./components/WorkSchedule"));
const Announcements = lazy(() => import("./components/Announcements"));
const TaskBoard = lazy(() => import("./components/TaskBoard"));

// Admin Pages
const ReportsAnalytics = lazy(() => import("./components/ReportsAnalytics"));
const AttendanceLogs = lazy(() => import("./components/AttendanceLogs"));
const GeofenceManagement = lazy(() => import("./components/GeofenceManagement"));
const EmployeeManagement = lazy(() => import("./components/EmployeeManagement"));
const PayrollManagement = lazy(() => import("./components/PayrollManagement"));
const SettingsPermissions = lazy(() => import("./components/SettingsPermissions"));
const ShiftScheduling = lazy(() => import("./components/ShiftScheduling"));
const LeaveRequests = lazy(() => import("./components/LeaveRequests"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* Employee Routes */}
          <Route path="/employee" element={<EmployeeDashboard />}>
            <Route index element={<EmployeeProfile />} />
            <Route path="attendance-history" element={<AttendanceHistory />} />
            <Route path="salary-details" element={<SalaryDetails />} />
            <Route path="leave-management" element={<LeaveManagement />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="help-support" element={<HelpSupport />} />
            <Route path="task-management" element={<TaskManagement />} />
            <Route path="work-schedule" element={<WorkSchedule />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="task-board" element={<TaskBoard />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<ReportsAnalytics />} />
            <Route path="attendance-logs" element={<AttendanceLogs />} />
            <Route path="geofence-management" element={<GeofenceManagement />} />
            <Route path="payroll-management" element={<PayrollManagement />} />
            <Route path="employee-management" element={<EmployeeManagement />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="leave-requests" element={<LeaveRequests />} />
            <Route path="reports-analytics" element={<ReportsAnalytics />} />
            <Route path="settings-permissions" element={<SettingsPermissions />} />
            <Route path="shift-scheduling" element={<ShiftScheduling />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
