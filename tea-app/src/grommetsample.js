//GO TO LINE 89 for option B (materialize)

import TeaCard from "./components/MaterializeTeaCard";
// add   Select, to imports from "grommet"
import { FormClose } from "grommet-icons";

const teaTypes = ["black", "green", "white", "oolong", "herbal", "rooibos"];

export const Children = () => {
  const [selected, setSelected] = useState([]);

  const onRemoveTeaType = (teaType) => {
    const teaIndex = teaTypes.indexOf(teaType);
    setSelected(
      selected.filter((selectedTeaType) => selectedTeaType !== teaIndex)
    );
  };

  const renderTeaType = (teaType) => (
    <Button
      key={`teaType_tag_${teaType}`}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onRemoveTeaType(teaType);
      }}
      onFocus={(event) => event.stopPropagation()}
    >
      <Box
        align="center"
        direction="row"
        gap="xsmall"
        pad={{ vertical: "xsmall", horizontal: "small" }}
        margin="xsmall"
        background="brand"
        round="large"
      >
        <Text size="small">{teaType}</Text>
        <Box round="full" margin={{ left: "xsmall" }}>
          <FormClose size="small" style={{ width: "12px", height: "12px" }} />
        </Box>
      </Box>
    </Button>
  );

  const renderOption = (option, state) => (
    <Box pad="small" background={state.active ? "active" : undefined}>
      {option}
    </Box>
  );

  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Select
          closeOnChange={false}
          multiple
          value={
            <Box wrap direction="row" width="small">
              {selected && selected.length ? (
                selected.map((index) => renderTeaType(teaTypes[index]))
              ) : (
                <Box
                  pad={{ vertical: "xsmall", horizontal: "small" }}
                  margin="xsmall"
                >
                  Select Tea Type
                </Box>
              )}
            </Box>
          }
          options={teaTypes}
          selected={selected}
          disabled={[2, 6]}
          onChange={({ selected: nextSelected }) => {
            setSelected([...nextSelected].sort());
          }}
        >
          {renderOption}
        </Select>
      </Box>
    </Grommet>
  );
};

// ----------- OPTION B

<div class="input-field col s12">
  <select>
    <option value="" disabled selected>
      {" "}
      Select tea type
    </option>
    <option value="1">black</option>
    <option value="2">green</option>
    <option value="3">white</option>
    <option value="3">oolong</option>
    <option value="3">herbal</option>
    <option value="3">rooibos</option>
  </select>
  <label>What color are your tea leaves?</label>
</div>;
