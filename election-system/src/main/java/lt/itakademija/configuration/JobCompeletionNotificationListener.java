package lt.itakademija.database.configuration;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import lt.itakademija.database.models.Candidates;

public class JobCompeletionNotificationListener extends JobExecutionListenerSupport{

	private static final Logger log = LoggerFactory.getLogger(JobCompeletionNotificationListener.class);
	private final JdbcTemplate jdbcTemplate;
	
	@Autowired 
	public JobCompeletionNotificationListener(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Override
	public void afterJob(JobExecution jobExecution) {
		if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
			log.info("!!! JOB FINISHED! Time to verify the results");

			List<Candidates> results = jdbcTemplate.query("SELECT first_name, last_name FROM people", new RowMapper<Candidates>() {
				@Override
				public Candidates mapRow(ResultSet rs, int row) throws SQLException {
					return new Candidates(rs.getString(1), rs.getString(2), rs.getDate(3), rs.getString(4));
				}
			});

			for (Candidates candidate : results) {
				log.info("Found <" + candidate + "> in the database.");
			}

		}
	}
}
