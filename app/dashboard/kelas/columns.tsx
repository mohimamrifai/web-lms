import { Class } from "@/types/kelas";
import { ColumnDef } from "@tanstack/react-table";

// Define columns
export const columns: ColumnDef<Class>[] = [
    {
        accessorKey: "name",
        header: "Nama Kelas"
    },
    {
        accessorKey: "grade",
        header: "Tingkat"
    },
    {
        accessorKey: "academicYear",
        header: "Tahun Ajaran"
    },
    {
        accessorKey: "teacher",
        header: "Wali Kelas"
    },
    {
        accessorKey: "totalStudents",
        header: "Jumlah Siswa"
    }
]