import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { name, employeeCode,
		department,
		school,
		currentPosition,
		positionAppliedFor,
		dateOfJoining,
		dateOfBirth,
		Gender,
		qualification,
		degree,
		area,
		year,
		university,
		country,
		cgpa,
		designation,
		organizationNameAndCity,
		startDate,
		endDate,
		totalPeriod,
		professionalExperienceBeforeUMT,
		workExperienceAtUMT,
		jobResponsibilities,
		achievements,
		lastPromotion,
		pgfirstyear,
		pgsecondyear,
		pgthirdyear,
		status,
		content } = req.body

	try {
		await prisma.note.create({
			data: {
				name,
				employeeCode,
				department,
				school,
				currentPosition,
				positionAppliedFor,
				dateOfJoining,
				dateOfBirth,
				Gender,
				qualification,
				degree,
				area,
				year,
				university,
				country,
				cgpa,
				designation,
				organizationNameAndCity,
				startDate,
				endDate,
				totalPeriod,
				professionalExperienceBeforeUMT,
				workExperienceAtUMT,
				jobResponsibilities,
				achievements,
				lastPromotion,
				pgfirstyear,
				pgsecondyear,
				pgthirdyear,
				status,
				content
			}
		})
		res.status(200).json({ message: 'Note Created' })
	} catch (error) {
		console.log("Failure");
	}
}
