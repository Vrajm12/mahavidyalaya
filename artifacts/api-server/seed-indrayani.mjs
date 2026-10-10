import dotenv from "dotenv";
import pg from "pg";
import { createHash } from "crypto";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function seed() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Clear existing data
    await client.query("DELETE FROM placements");
    await client.query("DELETE FROM faculty");
    await client.query("DELETE FROM courses");
    await client.query("DELETE FROM news");
    await client.query("DELETE FROM admins");

    // 1. ADMIN
    const secret = process.env.SESSION_SECRET || "indrayani-college-session-secret-2026";
    const hash = createHash("sha256").update("admin123" + secret).digest("hex");
    await client.query(
      "INSERT INTO admins (username, password_hash) VALUES ($1, $2)",
      ["admin", hash]
    );
    console.log("✓ Admin credentials seeded");

    // 2. COURSES (Indrayani Mahavidyalaya - Junior & Senior College Programs)
    const courses = [
      {
        name: "Junior College — Arts (FYJC & SYJC)",
        department: "Junior College - Arts",
        type: "Junior College",
        duration: "2 Years",
        seats: 240,
        description: "Comprehensive higher secondary education in humanities and social sciences. Fosters critical thinking, linguistic proficiency, historical analysis, and socio-economic reasoning.",
        eligibility: "Class 10 (SSC) passed from Maharashtra State Board or any recognized equivalent board",
        fees: "As per Govt. of Maharashtra Grant-in-Aid norms",
        is_active: true
      },
      {
        name: "Junior College — Commerce (FYJC & SYJC)",
        department: "Junior College - Commerce",
        type: "Junior College",
        duration: "2 Years",
        seats: 360,
        description: "Foundational commercial education encompassing Book-Keeping & Accountancy, Organization of Commerce, Economics, and Secretarial Practice / Mathematics.",
        eligibility: "Class 10 (SSC) passed with English from recognized board",
        fees: "As per Govt. of Maharashtra Grant-in-Aid norms",
        is_active: true
      },
      {
        name: "Junior College — Science (FYJC & SYJC)",
        department: "Junior College - Science",
        type: "Junior College",
        duration: "2 Years",
        seats: 240,
        description: "Rigorous scientific foundation covering Physics, Chemistry, Mathematics, Biology, and Information Technology with hands-on state-of-the-art laboratory experimentation.",
        eligibility: "Class 10 (SSC) passed with minimum 35% marks including Science and Mathematics",
        fees: "As per Govt. of Maharashtra Grant-in-Aid norms",
        is_active: true
      },
      {
        name: "B.Sc. — Bachelor of Science",
        department: "Senior College - Science",
        type: "Undergraduate Degree",
        duration: "3 Years",
        seats: 120,
        description: "Three-year comprehensive undergraduate program affiliated with Savitribai Phule Pune University (SPPU). Focuses on Physics, Chemistry, Mathematics, Botany, and Microbiology.",
        eligibility: "Higher Secondary Certificate (HSC 10+2) in Science stream or equivalent examination",
        fees: "Affordable fee structure as prescribed by SPPU & Govt. of Maharashtra",
        is_active: true
      },
      {
        name: "BCS — Bachelor of Computer Science",
        department: "Senior College - Computer Science",
        type: "Undergraduate Degree",
        duration: "3 Years",
        seats: 80,
        description: "Flagship technical degree program focusing on Software Development, Data Structures, Modern Web Architecture, Database Systems, Cloud Computing, and Artificial Intelligence.",
        eligibility: "HSC (10+2) Science with Mathematics or equivalent three-year Engineering Diploma",
        fees: "As prescribed by Savitribai Phule Pune University",
        is_active: true
      }
    ];

    for (const c of courses) {
      await client.query(
        `INSERT INTO courses (name, department, type, duration, seats, description, eligibility, fees, is_active)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [c.name, c.department, c.type, c.duration, c.seats, c.description, c.eligibility, c.fees, c.is_active]
      );
    }
    console.log("✓ 5 academic programs seeded");

    // 3. FACULTY (Indrayani Mahavidyalaya)
    const faculty = [
      {
        name: "Dr. S. K. Malghe",
        designation: "Principal",
        department: "Administration & Science",
        qualification: "M.Sc., Ph.D.",
        specialization: "Physical Chemistry, Higher Education Administration, Institutional NAAC Quality Framework",
        experience: 25,
        email: "principal@indrayanicollege.com",
        bio: "Dr. S. K. Malghe has been spearheading academic excellence, research initiatives, and holistic student development at Indrayani Mahavidyalaya under Indrayani Vidya Mandir Trust.",
        isHOD: false
      },
      {
        name: "Prof. Vilas R. Deshmukh",
        designation: "Vice Principal & HOD Arts",
        department: "Arts",
        qualification: "M.A. (English), M.Phil., SET",
        specialization: "Modern English Literature, Linguistics, Indian Writing in English",
        experience: 20,
        email: "vilas.deshmukh@indrayanicollege.com",
        bio: JSON.stringify({
          bio: "Prof. Deshmukh heads the Faculty of Arts, fostering literary appreciation, public speaking forums, and interdisciplinary cultural humanities initiatives.",
          publications: "12+ Papers on Comparative Literature and Cultural Studies",
          projects: "Coordinator for State-level Literary Youth Festival and Elocution Competitions"
        }),
        isHOD: true
      },
      {
        name: "Dr. Pratibha S. Bhalerao",
        designation: "HOD Commerce & Associate Professor",
        department: "Commerce",
        qualification: "M.Com., Ph.D., GDC&A",
        specialization: "Advanced Financial Accounting, Corporate Taxation, Banking Operations",
        experience: 18,
        email: "pratibha.bhalerao@indrayanicollege.com",
        bio: JSON.stringify({
          bio: "Dr. Bhalerao oversees commerce education, fintech workshops, and industry interaction for Junior and Senior commerce students.",
          publications: "15+ Research papers in National and International Banking Journals",
          projects: "Lead Advisor for Student Entrepreneurship & Financial Literacy Cell"
        }),
        isHOD: true
      },
      {
        name: "Dr. Ramesh M. Kadam",
        designation: "HOD Science & Associate Professor",
        department: "Science",
        qualification: "M.Sc. (Physics), Ph.D.",
        specialization: "Solid State Physics, Thin Film Nanomaterials, Material Science",
        experience: 19,
        email: "ramesh.kadam@indrayanicollege.com",
        bio: JSON.stringify({
          bio: "Dr. Kadam oversees modern experimental physics laboratories and guides undergraduate student research projects recognized by SPPU.",
          publications: "22+ Peer-reviewed research publications in international journals",
          projects: "Principal Investigator for University-sponsored Material Synthesis Grant"
        }),
        isHOD: true
      },
      {
        name: "Prof. Sujata P. Patil",
        designation: "HOD Computer Science (BCS)",
        department: "Computer Science",
        qualification: "M.Sc. (Comp. Sci.), MCA, NET",
        specialization: "Full Stack Development, Database Architecture, Machine Learning, Cloud Systems",
        experience: 14,
        email: "sujata.patil@indrayanicollege.com",
        bio: JSON.stringify({
          bio: "Prof. Patil guides the BCS program, supervising hackathons, industrial software internships, and coding bootcamps for student placements.",
          publications: "8+ Papers on Applied AI and Intelligent Information Systems",
          projects: "Director of College Coding Club and Technical Symposium 'CyberNova'"
        }),
        isHOD: true
      },
      {
        name: "Prof. Sachin K. Shinde",
        designation: "Assistant Professor",
        department: "Arts",
        qualification: "M.A. (History), B.Ed., NET",
        specialization: "Maratha History, Archaeology, Heritage Conservation, Socio-Political Dynamics",
        experience: 12,
        email: "sachin.shinde@indrayanicollege.com",
        bio: "Prof. Shinde specializes in regional historiography, conducting heritage treks and archival documentation across Maval and Pune districts.",
        isHOD: false
      },
      {
        name: "Prof. Anjali D. Joshi",
        designation: "Assistant Professor",
        department: "Commerce",
        qualification: "M.Com., MBA (Finance), SET",
        specialization: "Cost Accounting, Auditing, Capital Markets & Stock Trading",
        experience: 11,
        email: "anjali.joshi@indrayanicollege.com",
        bio: "Prof. Joshi conducts virtual stock market simulation labs and GST compliance workshops for commerce students.",
        isHOD: false
      },
      {
        name: "Dr. Nilesh V. Pawar",
        designation: "Assistant Professor",
        department: "Science",
        qualification: "M.Sc. (Organic Chemistry), Ph.D.",
        specialization: "Green Synthesis, Spectroscopy, Environmental Chemistry",
        experience: 10,
        email: "nilesh.pawar@indrayanicollege.com",
        bio: "Dr. Pawar leads organic chemistry practicals and oversees water quality assessment community outreach programs in Talegaon Dabhade.",
        isHOD: false
      },
      {
        name: "Prof. Sandeep R. Gaikwad",
        designation: "Training & Placement Officer (TPO)",
        department: "Computer Science",
        qualification: "M.Sc. (CS), MBA (HR)",
        specialization: "Campus Recruitment, Aptitude Training, Corporate Relations",
        experience: 13,
        email: "tpo@indrayanicollege.com",
        bio: "Prof. Gaikwad connects graduating B.Sc. and BCS students with premier software houses, IT firms, and financial organizations across Hinjawadi and Pune IT corridors.",
        isHOD: false
      }
    ];

    for (const f of faculty) {
      await client.query(
        `INSERT INTO faculty (name, designation, department, qualification, specialization, experience, email, bio, is_hod)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [f.name, f.designation, f.department, f.qualification, f.specialization, f.experience, f.email, f.bio, f.isHOD]
      );
    }
    console.log("✓ 9 faculty members seeded");

    // 4. NEWS & NOTICES
    const news = [
      {
        title: "Admissions Open 2026-27: Junior College (Arts, Commerce, Science) & Senior College (B.Sc., BCS)",
        content: "Indrayani Mahavidyalaya invites applications for admission into Class 11 (FYJC) Arts, Commerce, and Science, along with Senior College undergraduate programs B.Sc. and BCS. Merit lists and direct counseling schedules are posted on the college portal.",
        category: "announcement",
        date: new Date().toISOString()
      },
      {
        title: "SPPU Semester Examination Timetables Released for B.Sc. & BCS Programs",
        content: "Savitribai Phule Pune University (SPPU) examination branch has issued the theoretical and practical schedules for second and final year B.Sc. and BCS examinations. Hall tickets can be collected from the college administrative office.",
        category: "exam",
        date: new Date().toISOString()
      },
      {
        title: "Annual Cultural & Youth Festival 'Indrayani Tarang' Dates Announced",
        content: "Indrayani Mahavidyalaya will host its prestigious inter-collegiate festival celebrating literature, theatre, debate, classical arts, music, and digital creativity next month under the patronage of Indrayani Vidya Mandir Trust.",
        category: "event",
        date: new Date().toISOString()
      },
      {
        title: "Mega Campus Placement Drive: IT, Software & Financial Services Firms",
        content: "The Training & Placement Cell announces on-campus recruitment for final year BCS and B.Sc. students. Top recruiters including TCS, Infosys, Wipro, L&T Infotech, and HDFC Bank have confirmed participation.",
        category: "announcement",
        date: new Date().toISOString()
      }
    ];

    for (const n of news) {
      await client.query(
        `INSERT INTO news (title, content, category, published_at)
         VALUES ($1,$2,$3,$4)`,
        [n.title, n.content, n.category, n.date]
      );
    }
    console.log("✓ 4 news items seeded");

    // 5. PLACEMENTS
    const placements = [
      {
        student_name: "Amit Deshpande",
        company: "Tata Consultancy Services (TCS)",
        package_lpa: "4.8",
        program: "BCS",
        batch_year: 2025,
        role: "Associate Software Engineer"
      },
      {
        student_name: "Pooja Kulkarni",
        company: "Infosys",
        package_lpa: "4.5",
        program: "BCS",
        batch_year: 2025,
        role: "Systems Engineer"
      },
      {
        student_name: "Rohan More",
        company: "Wipro Technologies",
        package_lpa: "4.2",
        program: "B.Sc.",
        batch_year: 2025,
        role: "Data Analyst"
      },
      {
        student_name: "Snehal Shinde",
        company: "HDFC Bank Corporate",
        package_lpa: "4.0",
        program: "Commerce / BCS",
        batch_year: 2025,
        role: "Financial Operations Specialist"
      }
    ];

    for (const p of placements) {
      await client.query(
        `INSERT INTO placements (student_name, company, package_lpa, program, batch_year, role)
         VALUES ($1,$2,$3,$4,$5,$6)`,
        [p.student_name, p.company, p.package_lpa, p.program, p.batch_year, p.role]
      );
    }
    console.log("✓ Placements data seeded");

    await client.query("COMMIT");
    console.log("SUCCESS: Indrayani Mahavidyalaya database seeded successfully!");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seed error:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
