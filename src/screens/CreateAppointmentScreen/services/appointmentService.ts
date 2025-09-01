import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appointment } from "../models/types";
import { notificationService } from "../../../services/notifications";

export const appointmentService = {
  async createAppointment(newAppointment: Appointment) {
    const storedAppointments = await AsyncStorage.getItem("@MedicalApp:appointments");
    const appointments: Appointment[] = storedAppointments
      ? JSON.parse(storedAppointments)
      : [];

    appointments.push(newAppointment);
    await AsyncStorage.setItem("@MedicalApp:appointments", JSON.stringify(appointments));
    await notificationService.notifyNewAppointment(newAppointment.doctorId, newAppointment);
  }
};