package app.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface FileRepository extends CrudRepository<FileModel, Integer> {
		List<FileModel> findByFileName(String name);
		FileModel findByFilePath(String filePath);
}
