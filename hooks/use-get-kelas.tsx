import * as React from "react"
import { Class } from "@/types/kelas"

export function useGetKelas() {
  const [data, setData] = React.useState<Class[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    // Simulate API call
    const fetchData = () => {
      try {
        // Dummy data
        const dummyData: Class[] = [
          {
            id: "1",
            name: "Kelas 10 IPA 1",
            grade: "10",
            academicYear: "2023/2024",
            teacher: "Budi Santoso",
            totalStudents: 32
          },
          {
            id: "2",
            name: "Kelas 10 IPA 2", 
            grade: "10",
            academicYear: "2023/2024",
            teacher: "Siti Aminah",
            totalStudents: 30
          },
          {
            id: "3",
            name: "Kelas 10 IPS 1",
            grade: "10", 
            academicYear: "2023/2024",
            teacher: "Ahmad Hidayat",
            totalStudents: 34
          },
          {
            id: "4",
            name: "Kelas 10 IPS 2",
            grade: "10",
            academicYear: "2023/2024", 
            teacher: "Dewi Kusuma",
            totalStudents: 33
          },
          {
            id: "5",
            name: "Kelas 11 IPA 1",
            grade: "11",
            academicYear: "2023/2024",
            teacher: "Eko Prasetyo",
            totalStudents: 30
          },
          {
            id: "6",
            name: "Kelas 11 IPA 2",
            grade: "11",
            academicYear: "2023/2024",
            teacher: "Rina Wati",
            totalStudents: 31
          },
          {
            id: "7",
            name: "Kelas 11 IPS 1",
            grade: "11",
            academicYear: "2023/2024",
            teacher: "Agus Setiawan",
            totalStudents: 32
          },
          {
            id: "8",
            name: "Kelas 11 IPS 2",
            grade: "11",
            academicYear: "2023/2024",
            teacher: "Sri Wahyuni",
            totalStudents: 33
          },
          {
            id: "9",
            name: "Kelas 12 IPA 1",
            grade: "12",
            academicYear: "2023/2024",
            teacher: "Bambang Wijaya",
            totalStudents: 30
          },
          {
            id: "10",
            name: "Kelas 12 IPA 2",
            grade: "12",
            academicYear: "2023/2024",
            teacher: "Ratna Sari",
            totalStudents: 31
          },
          {
            id: "11",
            name: "Kelas 12 IPS 1",
            grade: "12",
            academicYear: "2023/2024",
            teacher: "Hendra Gunawan",
            totalStudents: 32
          },
          {
            id: "12",
            name: "Kelas 12 IPS 2",
            grade: "12",
            academicYear: "2023/2024",
            teacher: "Maya Putri",
            totalStudents: 33
          },
          {
            id: "13",
            name: "Kelas 10 Bahasa",
            grade: "10",
            academicYear: "2023/2024",
            teacher: "Dian Permata",
            totalStudents: 28
          },
          {
            id: "14",
            name: "Kelas 11 Bahasa",
            grade: "11",
            academicYear: "2023/2024",
            teacher: "Rudi Hartono",
            totalStudents: 29
          },
          {
            id: "15",
            name: "Kelas 12 Bahasa",
            grade: "12",
            academicYear: "2023/2024",
            teacher: "Nina Safitri",
            totalStudents: 27
          },
          {
            id: "16",
            name: "Kelas 10 Unggulan",
            grade: "10",
            academicYear: "2023/2024",
            teacher: "Irfan Hakim",
            totalStudents: 25
          },
          {
            id: "17",
            name: "Kelas 11 Unggulan",
            grade: "11",
            academicYear: "2023/2024",
            teacher: "Lina Marlina",
            totalStudents: 24
          },
          {
            id: "18",
            name: "Kelas 12 Unggulan",
            grade: "12",
            academicYear: "2023/2024",
            teacher: "Fajar Ramadhan",
            totalStudents: 26
          }
        ]

        setTimeout(() => {
          setData(dummyData)
          setLoading(false)
        }, 1000) // Simulate network delay

      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'))
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
