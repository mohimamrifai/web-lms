'use client'

import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Loading } from "@/components/loading"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useEffect } from "react"

interface Student {
    id: string
    name: string
    nisn: string
    gender: 'L' | 'P'
}

interface ClassData {
    id: string
    name: string
    grade: string
    homeroom_teacher: string
    total_students: number
    schedule: {
        day: string
        subjects: Array<{
            name: string
            time: string
            teacher: string
        }>
    }[]
    students: Student[]
}

export default function ClassDetailPage() {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [classData, setClassData] = useState<ClassData | null>(null)

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setClassData({
                id: params.id as string,
                name: "Kelas X IPA 1",
                grade: "X (Sepuluh)",
                homeroom_teacher: "Drs. John Doe",
                total_students: 32,
                schedule: [
                    {
                        day: "Senin",
                        subjects: [
                            { name: "Upacara", time: "07:30 - 08:30", teacher: "-" },
                            { name: "Matematika", time: "08:30 - 10:00", teacher: "Budi Santoso, S.Pd" },
                            { name: "Bahasa Indonesia", time: "10:00 - 11:30", teacher: "Siti Aminah, S.Pd" },
                            { name: "ISTIRAHAT", time: "11:30 - 12:00", teacher: "-" },
                            { name: "Fisika", time: "12:00 - 13:00", teacher: "Dr. Ahmad Suharto" }
                        ]
                    },
                    {
                        day: "Selasa",
                        subjects: [
                            { name: "Kimia", time: "07:30 - 09:00", teacher: "Dewi Putri, M.Pd" },
                            { name: "Biologi", time: "09:00 - 10:30", teacher: "Rini Wulandari, S.Pd" },
                            { name: "Sejarah", time: "10:30 - 11:30", teacher: "Agus Setiawan, M.Pd" },
                            { name: "ISTIRAHAT", time: "11:30 - 12:00", teacher: "-" },
                            { name: "Geografi", time: "12:00 - 13:00", teacher: "Hendra Wijaya, S.Pd" }
                        ]
                    },
                    {
                        day: "Rabu",
                        subjects: [
                            { name: "Bahasa Inggris", time: "07:30 - 09:00", teacher: "Sarah Johnson, M.Ed" },
                            { name: "Ekonomi", time: "09:00 - 10:30", teacher: "Bambang Sutrisno, M.Pd" },
                            { name: "Sosiologi", time: "10:30 - 11:30", teacher: "Diana Putri, S.Sos" },
                            { name: "ISTIRAHAT", time: "11:30 - 12:00", teacher: "-" },
                            { name: "Seni Budaya", time: "12:00 - 13:00", teacher: "Ratna Sari, S.Pd" }
                        ]
                    },
                    {
                        day: "Kamis",
                        subjects: [
                            { name: "Olahraga", time: "07:30 - 09:00", teacher: "Eko Prasetyo, S.Pd" },
                            { name: "Matematika", time: "09:00 - 10:30", teacher: "Budi Santoso, S.Pd" },
                            { name: "Fisika", time: "10:30 - 11:30", teacher: "Dr. Ahmad Suharto" },
                            { name: "ISTIRAHAT", time: "11:30 - 12:00", teacher: "-" },
                            { name: "Kimia", time: "12:00 - 13:00", teacher: "Dewi Putri, M.Pd" }
                        ]
                    },
                    {
                        day: "Jumat",
                        subjects: [
                            { name: "Agama", time: "07:30 - 09:30", teacher: "KH. Abdul Rahman" },
                            { name: "ISTIRAHAT", time: "09:30 - 10:00", teacher: "-" },
                            { name: "Bimbingan Konseling", time: "10:00 - 11:00", teacher: "Dra. Maya Indah" }
                        ]
                    }
                ],
                students: [
                    { id: "1", name: "Andi Pratama", nisn: "0051234567", gender: "L" },
                    { id: "2", name: "Budi Setiawan", nisn: "0051234568", gender: "L" },
                    { id: "3", name: "Citra Dewi", nisn: "0051234569", gender: "P" },
                    { id: "4", name: "Dewi Anggraini", nisn: "0051234570", gender: "P" },
                    { id: "5", name: "Eko Prasetyo", nisn: "0051234571", gender: "L" },
                    { id: "6", name: "Fitri Handayani", nisn: "0051234572", gender: "P" },
                    { id: "7", name: "Gunawan Wibowo", nisn: "0051234573", gender: "L" },
                    { id: "8", name: "Hani Safitri", nisn: "0051234574", gender: "P" },
                    { id: "9", name: "Irfan Hakim", nisn: "0051234575", gender: "L" },
                    { id: "10", name: "Jihan Putri", nisn: "0051234576", gender: "P" },
                    { id: "11", name: "Kevin Sanjaya", nisn: "0051234577", gender: "L" },
                    { id: "12", name: "Linda Kusuma", nisn: "0051234578", gender: "P" },
                    { id: "13", name: "Muhammad Rizki", nisn: "0051234579", gender: "L" },
                    { id: "14", name: "Nadia Safira", nisn: "0051234580", gender: "P" },
                    { id: "15", name: "Oscar Pratama", nisn: "0051234581", gender: "L" },
                    { id: "16", name: "Putri Rahayu", nisn: "0051234582", gender: "P" },
                    { id: "17", name: "Qori Amalia", nisn: "0051234583", gender: "P" },
                    { id: "18", name: "Rendi Wijaya", nisn: "0051234584", gender: "L" },
                    { id: "19", name: "Siti Nurhaliza", nisn: "0051234585", gender: "P" },
                    { id: "20", name: "Taufik Hidayat", nisn: "0051234586", gender: "L" },
                    { id: "21", name: "Umi Kalsum", nisn: "0051234587", gender: "P" },
                    { id: "22", name: "Vino Bastian", nisn: "0051234588", gender: "L" },
                    { id: "23", name: "Wulan Sari", nisn: "0051234589", gender: "P" },
                    { id: "24", name: "Xavier Putra", nisn: "0051234590", gender: "L" },
                    { id: "25", name: "Yuni Shara", nisn: "0051234591", gender: "P" },
                    { id: "26", name: "Zaki Ahmad", nisn: "0051234592", gender: "L" },
                    { id: "27", name: "Anisa Rahma", nisn: "0051234593", gender: "P" },
                    { id: "28", name: "Bayu Pradana", nisn: "0051234594", gender: "L" },
                    { id: "29", name: "Cindy Fatika", nisn: "0051234595", gender: "P" },
                    { id: "30", name: "Doni Kusuma", nisn: "0051234596", gender: "L" },
                    { id: "31", name: "Eva Celia", nisn: "0051234597", gender: "P" },
                    { id: "32", name: "Fajar Maulana", nisn: "0051234598", gender: "L" }
                ]
            })
            setLoading(false)
        }, 1000)
    }, [params.id])

    if (loading) {
        return <Loading />
    }

    if (!classData) {
        return <div>Kelas tidak ditemukan</div>
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">{classData.name}</h1>
                </div>
                <Button>Edit Kelas</Button>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-gray-500">Wali Kelas: {classData.homeroom_teacher}</p>
                <p className="text-gray-500">Tingkat: {classData.grade}</p>
                <p className="text-gray-500">Total Siswa: {classData.total_students} siswa</p>
            </div>

            <Separator />

            <Card>
                <CardHeader>
                    <CardTitle>Jadwal Pelajaran</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {classData.schedule.map((schedule, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <h3 className="font-bold mb-3">{schedule.day}</h3>
                                <div className="space-y-3">
                                    {schedule.subjects.map((subject, idx) => (
                                        <div key={idx} className={`text-sm p-2 rounded ${subject.name === 'ISTIRAHAT' ? 'bg-gray-100' : ''}`}>
                                            <p className="font-medium">{subject.time}</p>
                                            <p>{subject.name}</p>
                                            {subject.teacher !== '-' && (
                                                <p className="text-gray-500 text-xs">{subject.teacher}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Daftar Siswa</CardTitle>
                    <div className="text-sm text-gray-500">
                        Total: {classData.students.length} siswa
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>NISN</TableHead>
                                <TableHead>Jenis Kelamin</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {classData.students.map((student, index) => (
                                <TableRow key={student.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.nisn}</TableCell>
                                    <TableCell>
                                        <span className={`text-xs px-2 py-1 rounded ${student.gender === 'L' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
                                            {student.gender === 'L' ? 'Laki-laki' : 'Perempuan'}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
