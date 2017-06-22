package lt.itakademija.database.processor;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import lt.itakademija.database.models.Candidates;

public class CandidateProcessor implements ItemProcessor<Candidates, Candidates> {

	private static final Logger log = LoggerFactory.getLogger(CandidateProcessor.class);

	@Override
	public Candidates process(Candidates candidate) throws Exception {
		final String name = candidate.getName().toUpperCase();
		final String lastName = candidate.getLast_name();
		final Date date_of_birth = candidate.getDate_of_birth();
		final String description = candidate.getDescription();

		final Candidates transformedCandidate = new Candidates(name, lastName, date_of_birth, description);

		log.info("Converting(" + candidate + ") into (" + transformedCandidate + ")");
		return transformedCandidate;
	}

}
