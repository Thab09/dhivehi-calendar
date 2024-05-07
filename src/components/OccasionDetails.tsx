import useOccasions from "@/hooks/useOccasions";
type OccasionDetailsProps = {
  day: number;
};
const OccasionDetails = ({ day }: OccasionDetailsProps) => {
  const occasionsData = useOccasions({ day: day, month: "april" });

  return (
    <div>
      {occasionsData &&
        occasionsData.map((occasion, index) => (
          <div key={index}>
            {Array.isArray(occasion[1]) ? (
              occasion[1].map((occasionDescription, innerIndex) => (
                <p key={innerIndex}>{occasionDescription}</p>
              ))
            ) : (
              <p>{occasion[1]}</p>
            )}
          </div>
        ))}
    </div>
  );
};

export default OccasionDetails;
