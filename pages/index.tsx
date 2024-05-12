import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { prisma } from '../lib/prisma'


interface Notes {
  notes: {
    id: string
    name: string
    employeeCode: string
    department: string
    school: string
    currentPosition: string
    positionAppliedFor: string
    dateOfJoining: Date
    dateOfBirth: Date
    Gender: string
    qualification: String
    degree: String
    area: String
    year: String
    university: String
    country: String
    cgpa: String
    designation: String
    organizationNameAndCity: String
    startDate: Date
    endDate: Date
    totalPeriod: number
    professionalExperienceBeforeUMT: number
    workExperienceAtUMT: number
    jobResponsibilities: String
    achievements: String
    lastPromotion: String
    pgfirstyear: String
    pgsecondyear: String
    pgthirdyear: String
    status: String
    content: string
  }[]
}

interface FormData {
  name: string
  employeeCode: string
  department: string
  school: string
  currentPosition: string
  positionAppliedFor: string
  dateOfJoining: Date
  dateOfBirth: Date
  Gender: string
  qualification: String
  degree: String
  area: String
  year: String
  university: String
  country: String
  cgpa: String
  designation: String
  organizationNameAndCity: String
  startDate: Date
  endDate: Date
  totalPeriod: number
  professionalExperienceBeforeUMT: number
  workExperienceAtUMT: number
  jobResponsibilities: String
  achievements: String
  lastPromotion: String
  pgfirstyear: String
  pgsecondyear: String
  pgthirdyear: String
  status: String
  content: string
  id: string
}

const Home = ({ notes }: Notes) => {
  const [form, setForm] = useState<FormData>(
    {
      name: '',
      employeeCode: '',
      department: '',
      school: '',
      currentPosition: '',
      positionAppliedFor: '',
      dateOfJoining: new Date(),
      dateOfBirth: new Date(),
      Gender: 'Male',
      qualification: '',
      degree: '',
      area: '',
      year: '',
      university: '',
      country: '',
      cgpa: '',
      designation: '',
      organizationNameAndCity: '',
      startDate: new Date(),
      endDate: new Date(),
      totalPeriod: 0,

      professionalExperienceBeforeUMT: 0,
      workExperienceAtUMT: 0,
      jobResponsibilities: '',
      achievements: '',
      lastPromotion: '',
      pgfirstyear: '',
      pgsecondyear: '',
      pgthirdyear: '',
      status: '',
      content: '', id: ''
    })
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(() => {
        if (data.id) {
          deleteNote(data.id)
          setForm({
            name: '', employeeCode: '',
            department: '',
            school: '',
            currentPosition: '',
            positionAppliedFor: '',
            dateOfJoining: new Date(),
            dateOfBirth: new Date(),
            Gender: 'Male',
            qualification: '',
            degree: '',
            area: '',
            year: '',
            university: '',
            country: '',
            cgpa: '',
            designation: '',
            organizationNameAndCity: '',
            startDate: new Date(),
            endDate: new Date(),
            totalPeriod: 0,
            professionalExperienceBeforeUMT: 0,
            workExperienceAtUMT: 0,
            jobResponsibilities: '',
            achievements: '',
            lastPromotion: '',
            pgfirstyear: '',
            pgsecondyear: '',
            pgthirdyear: '',
            status: '',
            content: '', id: ''
          })
          refreshData()
        } else {
          setForm({
            name: '', employeeCode: '',
            department: '',
            school: '',
            currentPosition: '',
            positionAppliedFor: '',
            dateOfJoining: new Date(),
            dateOfBirth: new Date(),
            Gender: 'Male',
            qualification: '',
            degree: '',
            area: '',
            year: '',
            university: '',
            country: '',
            cgpa: '',
            designation: '',
            organizationNameAndCity: '',
            startDate: new Date(),
            endDate: new Date(),
            totalPeriod: 0,
            professionalExperienceBeforeUMT: 0,
            workExperienceAtUMT: 0,
            jobResponsibilities: '',
            achievements: '',
            lastPromotion: '',
            pgfirstyear: '',
            pgsecondyear: '',
            pgthirdyear: '',
            status: '',
            content: '', id: ''
          })
          refreshData()

        }
      }
      )
    } catch (error) {
      console.log(error);
    }
  }


  async function deleteNote(id: string) {
    try {
      fetch(`http://localhost:3000/api/note/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'DELETE'
      }).then(() => {
        refreshData()
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4 w-full">Brief Profile</h1>
      <form onSubmit={e => {
        e.preventDefault()
        handleSubmit(form)
      }} className='w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch'>
        <h1 className="bg-black text-white text-center font-bold text-2xl mt-4">Personal Details</h1>

        <input type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input type="text"
          placeholder="Employee Code"
          value={form.employeeCode}
          onChange={e => setForm({ ...form, employeeCode: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />


        <input
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={e => setForm({ ...form, department: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="School"
          value={form.school}
          onChange={e => setForm({ ...form, school: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Current Position"
          value={form.currentPosition}
          onChange={e => setForm({ ...form, currentPosition: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Position Applied For"
          value={form.positionAppliedFor}
          onChange={e => setForm({ ...form, positionAppliedFor: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="date"
          placeholder="Date of Joining"
          value={form.dateOfJoining ? form.dateOfJoining.toISOString().split('T')[0] : ''}
          onChange={e => setForm({ ...form, dateOfJoining: new Date(e.target.value) })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="date"
          placeholder="Date of Birth"
          value={form.dateOfBirth ? form.dateOfBirth.toISOString().split('T')[0] : ''}
          onChange={e => setForm({ ...form, dateOfBirth: new Date(e.target.value) })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Gender"
          value={form.Gender}
          onChange={e => setForm({ ...form, Gender: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <h1 className="bg-black text-white text-center font-bold text-2xl mt-4">Qualifications</h1>


        <input
          type="text"
          placeholder="Qualification"
          value={form.qualification as string}
          onChange={e => setForm({ ...form, qualification: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Degree"
          value={form.degree as string}
          onChange={e => setForm({ ...form, degree: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Area"
          value={form.area as string}
          onChange={e => setForm({ ...form, area: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Year"
          value={form.year as string}
          onChange={e => setForm({ ...form, year: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="University / Institute"
          value={form.university as string}
          onChange={e => setForm({ ...form, university: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Country"
          value={form.country as string}
          onChange={e => setForm({ ...form, country: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="CGPA/Div./Grade"
          value={form.cgpa as string}
          onChange={e => setForm({ ...form, cgpa: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <h1 className="bg-black text-white text-center font-bold text-2xl mt-4">PROFESSIONAL EXPERIENCE (Post 16 Years Qualification)</h1>

        <input
          type="text"
          placeholder="Designation"
          value={form.designation as string}
          onChange={e => setForm({ ...form, designation: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Organization Name and City"
          value={form.organizationNameAndCity as string}
          onChange={e => setForm({ ...form, organizationNameAndCity: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />


        <input
          type="date"
          placeholder="Start Date"
          value={form.startDate ? form.startDate.toISOString().split('T')[0] : ''}
          onChange={e => setForm({ ...form, startDate: new Date(e.target.value) })}
          className="border-2 rounded border-gray-600 p-1"
        />


        <input
          type="date"
          placeholder="End Date"
          value={form.endDate ? form.endDate.toISOString().split('T')[0] : ''}
          onChange={e => setForm({ ...form, endDate: new Date(e.target.value) })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="number"
          placeholder="Total Period"
          value={typeof form.totalPeriod === 'number' ? form.totalPeriod : ''}
          onChange={e => setForm({ ...form, totalPeriod: parseInt(e.target.value, 10) || 0 })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <h1 className="text-center font-bold text-2xl mt-4 w-full">Professional Experience</h1>
        <input
          type="number"
          placeholder="Professional Experience Before UMT"
          value={typeof form.professionalExperienceBeforeUMT === 'number' ? form.professionalExperienceBeforeUMT : ''}
          onChange={e => setForm({ ...form, professionalExperienceBeforeUMT: parseInt(e.target.value, 10) || 0 })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="number"
          placeholder="Work Experience @ UMT"
          value={typeof form.workExperienceAtUMT === 'number' ? form.workExperienceAtUMT : ''}
          onChange={e => setForm({ ...form, workExperienceAtUMT: parseInt(e.target.value, 10) || 0 })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <p>Total Experience: {form.workExperienceAtUMT + form.professionalExperienceBeforeUMT} years</p>


        <h1 className="bg-black text-white text-center font-bold text-2xl mt-4">Brief Profile</h1>

        <textarea
          placeholder="Current Assignments / Job responsibilities"
          value={form.jobResponsibilities as string}
          onChange={e => setForm({ ...form, jobResponsibilities: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <textarea
          placeholder="Achievements/Value Additions at UMT in last three years"
          value={form.achievements as string}
          onChange={e => setForm({ ...form, achievements: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <p>Last Promotion as (Designation):</p>


        <input
          type="text"
          placeholder="Last Promotion Year = "
          value={form.lastPromotion as string}
          onChange={e => setForm({ ...form, lastPromotion: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <p>Performance Grades (Last Three years): If Applicable</p>

        <input
          type="text"
          placeholder="2018-2019 = "
          value={form.pgfirstyear as string}
          onChange={e => setForm({ ...form, pgfirstyear: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />


        <input
          type="text"
          placeholder="2019-2020 = "
          value={form.pgsecondyear as string}
          onChange={e => setForm({ ...form, pgsecondyear: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="2020-2021 = "
          value={form.pgthirdyear as string}
          onChange={e => setForm({ ...form, pgthirdyear: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />

        <input
          type="text"
          placeholder="Status"
          value={form.status as string}
          onChange={e => setForm({ ...form, status: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />



        <textarea
          placeholder="Content"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
          className="border-2 rounded border-gray-600 p-1"
        />


        <button type="submit" className="bg-blue-500 text-white rounded p-1">Add +</button>
      </form>
      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <ul>
          {notes.map(note => (
            <li key={note.id} className="border-b border-gray-600 p-2">
              <div className="flex justify-between">
                <div className="flex-1">
                  <h3 className="font-bold">Name: {note.name}</h3>
                  <p className="text-sm">Designation: {note.designation}</p>
                </div>
                <button onClick={() => setForm({
                  name: note.name,
                  employeeCode: note.employeeCode,
                  department: note.department,
                  school: note.school,
                  currentPosition: note.currentPosition,
                  positionAppliedFor: note.positionAppliedFor,
                  dateOfJoining: note.dateOfJoining,
                  dateOfBirth: note.dateOfBirth,
                  Gender: note.Gender,
                  qualification: note.qualification,
                  degree: note.degree,
                  area: note.area,
                  year: note.year,
                  university: note.university,
                  country: note.country,
                  cgpa: note.cgpa,
                  designation: note.designation,
                  organizationNameAndCity: note.organizationNameAndCity,
                  startDate: note.startDate,
                  endDate: note.endDate,
                  totalPeriod: note.totalPeriod,
                  professionalExperienceBeforeUMT: note.professionalExperienceBeforeUMT,
                  workExperienceAtUMT: note.workExperienceAtUMT,
                  jobResponsibilities: note.jobResponsibilities,
                  achievements: note.achievements,
                  lastPromotion: note.lastPromotion,
                  pgfirstyear: note.pgfirstyear,
                  pgsecondyear: note.pgsecondyear,
                  pgthirdyear: note.pgthirdyear,
                  status: note.status,
                  content: note.content, id: note.id
                })} className="bg-black mr-3 px-3 text-white rounded">Update</button>
                <button onClick={() => deleteNote(note.id)} className="bg-black px-3 text-white rounded">X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
  const notes = await prisma.note.findMany({
    select: {
      name: true,
      id: true,
      employeeCode: true,
      department: true,
      school: true,
      currentPosition: true,
      positionAppliedFor: true,
      Gender: true,
      qualification: true,
      degree: true,
      area: true,
      year: true,
      university: true,
      country: true,
      cgpa: true,
      designation: true,
      organizationNameAndCity: true,
      totalPeriod: true,
      professionalExperienceBeforeUMT: true,
      workExperienceAtUMT: true,
      jobResponsibilities: true,
      achievements: true,
      lastPromotion: true,
      pgfirstyear: true,
      pgsecondyear: true,
      pgthirdyear: true,
      status: true,
      content: true
    }
  })

  return {
    props: {
      notes
    }
  }
}