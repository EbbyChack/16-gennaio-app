import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, addToFavorites } from "../redux";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const params = useParams();

  const addToFavoritesHandler = (company) => {
    dispatch(addToFavorites(company));
  };

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} onAddToFavorites={() => addToFavoritesHandler(jobData.company_name)}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
