import _ from "lodash";
import React from "react";
import DropZone from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";

const renderImagePreview = imagefile => {
  return _.map(imagefile, ({ name, preview, size }) => [
    <li key="imagePreview">
      <img
        style={{ display: "block", margin: "auto", paddingTop: "10%" }}
        src={preview}
        alt={name}
        height="220px"
        width="200px"
      />
    </li>,
    <li style={{ textAlign: "center" }} key="imageDetails">
      {name} - {size} bytes
    </li>
  ]);
};

export default ({
  handleOnDrop,
  input,
  imagefile,
  label,
  meta: { error, touched }
}) => (
  <div style={{ height: 335 }}>
    <DropZone
      multiple={false}
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={handleOnDrop}
      onChange={file => input.onChange(file)}
      style={{ height: 300, width: 500 }}
    >
      {imagefile && imagefile.length > 0 ? (
        <ul
          style={{
            backgroundColor: "#efebeb",
            listStyleType: "none",
            height: 300,
            width: 470
          }}
        >
          {renderImagePreview(imagefile)}
        </ul>
      ) : (
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#efebeb",
            height: "100%",
            width: "100%",
            borderRadius: 5
          }}
        >
          <div style={{ paddingTop: 70 }}>
            <MdCloudUpload style={{ fontSize: 100 }} />
          </div>
          <p>click or drag your shop logo or image of your shop</p>
        </div>
      )}
    </DropZone>
    {touched && error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);
