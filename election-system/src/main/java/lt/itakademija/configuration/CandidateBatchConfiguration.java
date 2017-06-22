package lt.itakademija.database.configuration;

import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.mapping.DefaultLineMapper;
import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.processor.CandidateProcessor;

@Configuration
@EnableBatchProcessing
public class CandidateBatchConfiguration {

	@Autowired
	public JobBuilderFactory jobBuilderFactory;
	
	@Autowired
	public StepBuilderFactory stepBuilderFactory;
	
	@Autowired
	public DataSource dataSource;
	
	//tag readerwiterprocessor
	@Bean
	public FlatFileItemReader<Candidates> reader() {
		FlatFileItemReader<Candidates> reader = new FlatFileItemReader<Candidates>();
		reader.setResource(new ClassPathResource("candidates-data.csv"));
		reader.setLineMapper(new DefaultLineMapper<Candidates>(){{
			setLineTokenizer(new DelimitedLineTokenizer(){{
				setNames(new String [] {"name", "last_name", "date_of_birth", "Description"});
			}});
			setFieldSetMapper(new BeanWrapperFieldSetMapper<Candidates>(){{
				setTargetType(Candidates.class);
			}});
		}});
		return reader;	
	}
	
	@Bean
	public CandidateProcessor processor () {
		return new CandidateProcessor();
	}
	public JdbcBatchItemWriter<Candidates> writer() {
		JdbcBatchItemWriter<Candidates> writer=  new JdbcBatchItemWriter<Candidates>();
		writer.setItemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<Candidates>());
		writer.setSql("INSERT INTO candidates (name, last_name, date_of_birth, description) VALUES (:name, :last_name, :date_of_birth, _description)");
		writer.setDataSource(dataSource);
		return writer;
	}
	
	public Job importUserJob(JobCompeletionNotificationListener listener) {
		return jobBuilderFactory.get("ImportUserJob")
				.incrementer(new RunIdIncrementer())
				.listener(listener)
				.flow(step1())
				.end()
				.build();
		
	}

	public Step step1() {
		// TODO Auto-generated method stub
		return stepBuilderFactory.get("step1")
				.<Candidates, Candidates> chunk(1)
				.reader(reader())
				.processor(processor())
				.writer(writer())
				.build();
	}
	
}
