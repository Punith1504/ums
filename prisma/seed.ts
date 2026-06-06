import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.grade.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.course.deleteMany()
  await prisma.announcement.deleteMany()
  await prisma.profile.deleteMany()
  await prisma.user.deleteMany()

  // Create an Admin User
  const admin = await prisma.user.create({
    data: {
      userId: 'ADMIN001',
      passwordHash: 'password', // in a real app, hash this!
      role: 'ADMIN',
      profile: {
        create: {
          name: 'Super Admin',
          department: 'Administration',
        }
      }
    }
  })

  // Create a Student User
  const student = await prisma.user.create({
    data: {
      userId: 'STU12345',
      passwordHash: 'password',
      role: 'STUDENT',
      profile: {
        create: {
          name: 'John Doe',
          department: 'Computer Science',
        }
      }
    }
  })

  // Create a Course
  const course = await prisma.course.create({
    data: {
      code: 'CS101',
      name: 'Intro to Programming',
      department: 'Computer Science'
    }
  })

  // Enroll Student
  await prisma.enrollment.create({
    data: {
      studentId: student.id,
      courseId: course.id
    }
  })

  // Add an Announcement
  await prisma.announcement.create({
    data: {
      title: 'Welcome to Enterprise UMS',
      content: 'The new system is live! Please explore the features.',
      category: 'ACADEMIC',
      authorId: admin.id
    }
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
